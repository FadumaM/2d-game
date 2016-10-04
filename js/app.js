window.onload = function() {
  var deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var fish = [];
  var background = [];
  //Aliases
  var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

  //Create a Pixi stage and renderer and add the
  //renderer.view to the DOM
  var stage = new Container(),
    renderer = PIXI.autoDetectRenderer(deviceWidth, deviceHeight, {
      antialias: false,
      transparent: true,
      resolution: 1
    });
  document.body.appendChild(renderer.view);

  //load an image and run the `setup` function when it's done
  loader
    .add("img/feud'artifice.jpg")
    .add("img/fish3.png")
    .load(setup);

  function setup() {

    background = new Sprite(resources["img/feud'artifice.jpg"].texture);
    background.width = deviceWidth;
    background.height = deviceHeight;
    stage.addChild(background);

    fish = new Sprite(resources["img/fish3.png"].texture);
    stage.addChild(fish);

    animate();

  }

  function animate() {
    // start the timer for the next animation loop
    requestAnimationFrame(animate);

    // each frame we spin the bunny around a bit
    fish.x += 10;

    // this is the main render call that makes pixi draw your container and its children.
    renderer.render(stage);
  }

  window.onresize = function(event) {
    deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    deviceHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    renderer.view.style.width = deviceWidth + "px";
    renderer.view.style.height = deviceHeight + "px";
  };

};
