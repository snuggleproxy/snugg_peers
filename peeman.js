
// IMPORTANT:
// assumes u already loaded peerjs
// creates globals:
//   p
//   c
//   gts

// BULLSHIZZLE:
// btw, I love globals. they r always there for u.
// btw fuk ur scope don't import my code its not a module

function are_we_id_yet(){
  if (p.id) {
    prin(p.id);
    addConnInput();
  }else{
    setTimeout(are_we_id_yet, 5);
  }
};

function prin(t){
  let newpee = document.createElement('div');
  newpee.innerText = t;
  document.body.appendChild(newpee);
};

function addConnInput(){
  let inp = document.createElement('input')

  document.body.append(inp);

  yuh = document.createElement('button')
  yuh.innerText='yuh'
  yuh.onclick = ()=>{
    let id = inp.value;
    window.gts = p.connect(id);
    gts.on("data",(d)=>{
      console.log(d);
    });
  };
  document.body.append(yuh)
};

window.c = [];
window.p = new Peer();
window.gts = null;

p.on("connection", (conn)=>{
  c.push(conn);
  console.log("new conn: ",conn);
  conn.on('data',(d)=>{
    console.log(d);
  });
});

are_we_id_yet();


// THIS IS KINDA LIKE HELP I GUESS?
window.EXPLANATION = {
  p:"peer. a Peer() aka peerjs object used for managing peers",
};

