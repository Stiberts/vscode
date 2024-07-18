(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "", v: "weekly"});

// Initialize and add the map
let map;

async function initMap() {
  // The location of Bergen
  let position = { lat: 60.397076, lng: 5.324383 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  console.log("Kart", Map);
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  console.log("marker", AdvancedMarkerElement);

  // The map, centered at Bergen
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Bergen
  let marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Bergen",
  });
}

initMap();
<<<<<<< HEAD

async function changeToArea51() {
    let position2 = {lat: 37.2343, lng: -115.8067};

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 13,
      center: position2,
      mapId: "DEMO_MAP_ID",

    });

    let marker = new AdvancedMarkerElement({
      map: map,
      position: position2,
    });
}

async function changeToTokyo() {
  let position3 = {lat: 35.652832, lng: 139.839478};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position3,
    mapId: "DEMO_MAP_ID",

  });

  let marker = new AdvancedMarkerElement({
    map: map,
    position: position3,
  });
}

async function changeToSvalbard() {
  let position4 = {lat: 79.004959, lng: 17.666016};

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 6,
    center: position4,
    mapId: "DEMO_MAP_ID",

  });

  let marker = new AdvancedMarkerElement({
    map: map,
    position: position4,
  });
}
=======
>>>>>>> d64acecb6c5e2aaab78a4227a9a87b4b0bbea074
