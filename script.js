function show(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  document.querySelectorAll('.nav a').forEach(a=>a.classList.remove('active'));
  window.scrollTo({top:0,behavior:'smooth'});
}
function toast(m){
  var t=document.getElementById('toast');
  t.innerText=m;
  t.classList.remove('hidden');
  setTimeout(function(){t.classList.add('hidden')},2500);
}
function openLesson(title){
  var box=document.getElementById('lessonBox');
  box.classList.remove('hidden');
  box.innerHTML='<h3>'+title+'</h3><p style="margin:10px 0;color:#666">Full lesson content for '+title+'...</p><div class="quote">Example: "I am learning English with Prince everyday. It is very easy!"</div><button class="btn" onclick="speakWord(\''+title+'\')">🔊 Listen</button> <button class="btn" style="background:white;color:#0a3d2e;border:1px solid #ddd" onclick="this.parentElement.classList.add(\'hidden\')">Close</button>';
  box.scrollIntoView({behavior:'smooth'});
}
function speakWord(text){
  if('speechSynthesis' in window){
    var utter=new SpeechSynthesisUtterance(text);
    utter.lang='en-US';
    utter.rate=0.9;
    speechSynthesis.speak(utter);
  }
  toast('Speaking: '+text);
}
function checkTrans(){
  var val=document.getElementById('transInput').value.toLowerCase();
  if(val.includes('how are you')){toast('Great job! ✅ Correct')}else{toast('Good try! Keep practicing 💪')}
}
show('home');