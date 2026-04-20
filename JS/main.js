import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const canvas = document.querySelector("#bg");
const loaderOverlay = document.getElementById("loaderOverlay");
const codeButton = document.querySelector(".user-button");

if (canvas) {
  canvas.style.touchAction = "none";
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

function isMobileView() {
  return (
    window.matchMedia("(max-width: 900px)").matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

function getResponsiveSettings() {
  const mobile = isMobileView();

  return {
    mobile,
    baseFov: mobile ? 82 : 75,
    targetFov: mobile ? 72 : 45,
    pixelRatioCap: mobile ? 1.25 : 1.75,
    maxPixelCount: mobile ? 1600 * 900 : 2560 * 1440,
  };
}

let responsive = getResponsiveSettings();

const camera = new THREE.PerspectiveCamera(
  responsive.baseFov,
  1,
  0.01,
  1000
);

camera.position.set(-175, 310, 190);
camera.rotation.order = "YXZ";

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: !responsive.mobile,
  powerPreference: "high-performance",
});

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.3;

scene.add(new THREE.AmbientLight(0xffffff, 1.1));

const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

const pointLight = new THREE.PointLight(0xffffff, 1.5);
pointLight.position.set(0, 3, 0);
scene.add(pointLight);

let isAnimating = false;
let rotationLocked = false;
let hasRedirected = false;
let animProgress = 0;
const animSpeed = 0.8;

const startQuat = new THREE.Quaternion();
const targetQuat = new THREE.Quaternion();
const tempCamera = new THREE.Object3D();

let startFov = responsive.baseFov;
let targetFov = responsive.targetFov;

let screenObject = null;
let monitorFrame = null;

const loadingManager = new THREE.LoadingManager();

loadingManager.onLoad = () => {
  if (loaderOverlay) {
    loaderOverlay.classList.add("is-hidden");
    setTimeout(() => {
      loaderOverlay.style.display = "none";
    }, 250);
  }
};

const loader = new GLTFLoader(loadingManager);

loader.load(
  "https://huggingface.co/George007koupp/object/resolve/main/NewRoom.glb",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.x -= center.x;
    model.position.z -= center.z;

    const updatedBox = new THREE.Box3().setFromObject(model);
    model.position.y -= updatedBox.min.y + 1.6;

    model.updateMatrixWorld(true);

    model.traverse((child) => {
      const name = (child.name || "").toLowerCase();

      if (name.includes("screen")) {
        screenObject = child;
      }

      if (name.includes("monitorframe")) {
        monitorFrame = child;
      }
    });

    console.log("Model loaded");
    console.log("Screen object:", screenObject);
    console.log("MonitorFrame object:", monitorFrame);
  },
  undefined,
  (err) => {
    console.error("Error loading model:", err);

    if (loaderOverlay) {
      loaderOverlay.classList.add("is-hidden");
      setTimeout(() => {
        loaderOverlay.style.display = "none";
      }, 250);
    }
  }
);

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function resizeRendererToDisplaySize() {
  responsive = getResponsiveSettings();

  const cssWidth = Math.max(1, Math.floor(canvas.clientWidth));
  const cssHeight = Math.max(1, Math.floor(canvas.clientHeight));

  const pixelRatio = Math.min(
    window.devicePixelRatio || 1,
    responsive.pixelRatioCap
  );

  let width = Math.floor(cssWidth * pixelRatio);
  let height = Math.floor(cssHeight * pixelRatio);

  const pixelCount = width * height;

  if (pixelCount > responsive.maxPixelCount) {
    const scale = Math.sqrt(responsive.maxPixelCount / pixelCount);
    width = Math.max(1, Math.floor(width * scale));
    height = Math.max(1, Math.floor(height * scale));
  }

  const needResize = canvas.width !== width || canvas.height !== height;

  if (needResize) {
    renderer.setSize(width, height, false);
  }

  return needResize;
}

function updateCameraForViewport() {
  responsive = getResponsiveSettings();
  targetFov = responsive.targetFov;

  if (!rotationLocked && !isAnimating) {
    camera.fov = responsive.baseFov;
  }

  camera.aspect =
    Math.max(1, canvas.clientWidth) / Math.max(1, canvas.clientHeight);
  camera.updateProjectionMatrix();
}

function flyToScreen() {
  const targetObject = monitorFrame || screenObject;
  if (!targetObject || isAnimating) return;

  targetObject.updateMatrixWorld(true);

  const targetCenter = new THREE.Vector3();
  const targetBox = new THREE.Box3().setFromObject(targetObject);
  targetBox.getCenter(targetCenter);

  startQuat.copy(camera.quaternion);
  startFov = camera.fov;

  tempCamera.position.copy(camera.position);
  tempCamera.lookAt(targetCenter);

  const extra180 = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 1, 0),
    Math.PI
  );

  targetQuat.copy(tempCamera.quaternion).multiply(extra180);

  animProgress = 0;
  isAnimating = true;
}

function syncYawPitchFromCamera() {
  const euler = new THREE.Euler().setFromQuaternion(camera.quaternion, "YXZ");
  yaw = euler.y;
  pitch = euler.x;
}

if (codeButton) {
  codeButton.addEventListener("click", () => {
    flyToScreen();
  });
}

let isDragging = false;
let activePointerId = null;
let previousX = 0;
let previousY = 0;
let yaw = 0;
let pitch = 0;

const rotationSpeed = 0.005;
const maxPitch = Math.PI / 2 - 0.05;

canvas.addEventListener("pointerdown", (e) => {
  if (isAnimating || rotationLocked) return;
  if (e.pointerType === "mouse" && e.button !== 0) return;

  isDragging = true;
  activePointerId = e.pointerId;
  previousX = e.clientX;
  previousY = e.clientY;

  if (canvas.setPointerCapture) {
    canvas.setPointerCapture(e.pointerId);
  }
});

window.addEventListener("pointermove", (e) => {
  if (!isDragging || isAnimating || rotationLocked) return;
  if (e.pointerId !== activePointerId) return;

  yaw -= (e.clientX - previousX) * rotationSpeed;
  pitch -= (e.clientY - previousY) * rotationSpeed;
  pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));

  previousX = e.clientX;
  previousY = e.clientY;
});

function stopDragging(e) {
  if (activePointerId !== null && e.pointerId !== activePointerId) return;
  isDragging = false;
  activePointerId = null;
}

window.addEventListener("pointerup", stopDragging);
window.addEventListener("pointercancel", stopDragging);

function handleViewportChange() {
  resizeRendererToDisplaySize();
  updateCameraForViewport();
}

window.addEventListener("resize", handleViewportChange);
window.addEventListener("orientationchange", handleViewportChange);

handleViewportChange();

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  if (resizeRendererToDisplaySize()) {
    updateCameraForViewport();
  }

  if (isAnimating) {
    animProgress += delta * animSpeed;
    const t = easeInOut(Math.min(animProgress, 1));

    camera.quaternion.slerpQuaternions(startQuat, targetQuat, t);
    camera.fov = THREE.MathUtils.lerp(startFov, targetFov, t);
    camera.updateProjectionMatrix();

    if (animProgress >= 1) {
      isAnimating = false;
      rotationLocked = true;
      syncYawPitchFromCamera();

      if (codeButton) {
        codeButton.style.transition = "opacity 0.5s ease";
        codeButton.style.opacity = "0";

        setTimeout(() => {
          codeButton.style.display = "none";
        }, 500);
      }

      if (!hasRedirected) {
        hasRedirected = true;
        setTimeout(() => {
          window.location.href = "code.html";
        }, 200);
      }
    }
  } else {
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
  }

  renderer.render(scene, camera);
}

animate();