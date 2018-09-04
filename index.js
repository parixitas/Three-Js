
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor("#222222")
document.body.appendChild( renderer.domElement )
camera.position.z = 10

var geometry = new THREE.BoxGeometry( 3, 3, 3)
var material = new THREE.MeshBasicMaterial( {
	color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

function animate() {
	requestAnimationFrame( animate )
	wireframeCube.rotation.x -= 0.01;
	wireframeCube.rotation.y -= 0.01;
	renderer.render( scene, camera )
}
animate()