const DEFAULT_DATA = {"STYLE": ["2-Step", "Acid House", "Acid Jazz", "Acid Rock", "Acoustic Pop", "Acoustic Rock", "Afro House", "Afrobeat", "Afrobeats", "Afropop", "Alt-Country", "Alt-Pop", "Alternative Dance", "Alternative Hip-Hop", "Alternative Metal", "Alternative R&B", "Alternative Rock", "Ambient", "Ambient House", "Ambient Pop", "Ambient Techno", "Americana", "Anime Rock", "Arena Rock", "Art Pop", "Art Rock", "Atmospheric Black Metal", "Avant-Garde", "Avant-Garde Jazz", "Baroque Pop", "Bass House", "Bebop", "Big Band", "Big Beat", "Black Metal", "Bluegrass", "Blues", "Blues Rock", "Boom Bap", "Bossa Nova", "Breakbeat", "Breakcore", "Britpop", "Bubblegum Pop", "C-Pop", "Cajun", "Chicago Blues", "Chillhop", "Chillout", "Chillwave", "Chiptune", "Christian Rock", "City Pop", "Classic Rock", "Classical", "Cloud Rap", "Coldwave", "Contemporary R&B", "Country", "Country Pop", "Country Rock", "Crunk", "Dance-Pop", "Dancehall", "Dark Ambient", "Dark Jazz", "Dark Pop", "Dark Techno", "Darkwave", "Death Metal", "Deep House", "Detroit Techno", "Disco", "Doom Metal", "Dream Pop", "Dream Trance", "Drill", "Drum & Bass", "Dub", "Dub Techno", "Dubstep", "EDM", "Electro", "Electro House", "Electro Swing", "Electroclash", "Electropop", "Emo", "Emo Rap", "Ethereal Wave", "Eurodance", "Experimental", "Experimental Hip-Hop", "Folk", "Folk Metal", "Folk Pop", "Folk Rock", "Folktronica", "French House", "Funk", "Funk Metal", "Funk Rock", "Future Bass", "Future Funk", "Future Garage", "Garage Rock", "Glam Metal", "Glam Rock", "Glitch", "Glitch Hop", "Gospel", "Gothic Metal", "Gothic Rock", "Grime", "Grindcore", "Grunge", "Gypsy Jazz", "Happy Hardcore", "Hard Rock", "Hardcore Punk", "Hardstyle", "Heavy Metal", "Hip-Hop", "House", "Hyperpop", "IDM", "Indie Folk", "Indie Pop", "Indie Rock", "Industrial", "Industrial Metal", "Industrial Rock", "Italo Disco", "J-Pop", "J-Rock", "Jazz", "Jazz Fusion", "Jazz Funk", "Jazz Hop", "Jazz Rap", "Jazz Rock", "Jungle", "K-Pop", "Latin", "Latin Jazz", "Latin Pop", "Lo-fi", "Lo-fi Hip-Hop", "Math Rock", "Melodic Death Metal", "Melodic Hardcore", "Metal", "Metalcore", "Midwest Emo", "Minimal House", "Minimal Techno", "Motown", "Neo-Psychedelia", "Neo-Soul", "New Age", "New Jack Swing", "New Wave", "Nu Disco", "Nu Jazz", "Nu Metal", "Nu-Funk", "Opera", "Orchestral Pop", "Phonk", "Post-Hardcore", "Post-Metal", "Post-Punk", "Post-Rock", "Power Metal", "Progressive House", "Progressive Metal", "Progressive Rock", "Psychedelic Pop", "Psychedelic Rock", "Psytrance", "Punk", "Pop", "Pop Punk", "Pop Rap", "Pop Rock", "R&B", "Rap", "Reggae", "Reggaeton", "Rock", "Rockabilly", "Roots Reggae", "Salsa", "Samba", "Shoegaze", "Ska", "Ska Punk", "Smooth Jazz", "Soul", "Soul Jazz", "Southern Rock", "Speed Metal", "Synth Funk", "Synth Pop", "Synth Rock", "Synthwave", "Tech House", "Techno", "Thrash Metal", "Trap", "Trap Metal", "Trip Hop", "Tropical House", "UK Garage", "Vaporwave", "Witch House", "World Music", "Yacht Rock"], "INSTRUMENT": ["Accordion", "Acoustic Guitar", "Agogo", "Bagpipe", "Balalaika", "Bandoneon", "Banjo", "Bass Guitar", "Bassoon", "Bells", "Bongos", "Brass Section", "Celesta", "Cello", "Clavinet", "Congas", "Cowbell", "Didgeridoo", "Djembe", "Double Bass", "Drum Machine", "Electric Guitar", "Electric Piano", "Erhu", "Flugelhorn", "Flute", "French Horn", "Glockenspiel", "Gong", "Hammond Organ", "Handpan", "Harmonica", "Harp", "Harpsichord", "Irish Whistle", "Kalimba", "Koto", "Mandolin", "Marimba", "Mellotron", "Nylon Guitar", "Oboe", "Ocarina", "Organ", "Oud", "Pan Flute", "Piano", "Piccolo", "Recorder", "Santoor", "Santur", "Saxophone", "Shakuhachi", "Shamisen", "Sitar", "Steel Drum", "Stylophone", "Synth Bass", "Synthesizer", "Tabla", "Taiko", "Tambourine", "Theremin", "Timpani", "Trombone", "Trumpet", "Tuba", "Ukulele", "Vibraphone", "Viola", "Violin", "Xylophone", "8-bit Sound"], "MOOD": ["Aggressive", "Angelic", "Anthemic", "Atmospheric", "Bittersweet", "Bright", "Brooding", "Calm", "Cinematic", "Confident", "Dark", "Dreamy", "Dramatic", "Emotional", "Energetic", "Epic", "Euphoric", "Funky", "Haunting", "Hopeful", "Hypnotic", "Intimate", "Joyful", "Melancholic", "Mellow", "Mysterious", "Nostalgic", "Optimistic", "Playful", "Powerful", "Reflective", "Romantic", "Sensual", "Somber", "Suspenseful", "Triumphant", "Warm"], "VOCAL": ["Female Vocal", "Male Vocal", "Female and Male Duet", "Female Rock Vocal", "Male Rock Vocal", "Soft Female Vocal", "Soft Male Vocal", "Powerful Female Vocal", "Powerful Male Vocal", "Breathy Female Vocal", "Breathy Male Vocal", "Whisper Vocal", "Soulful Vocal", "Raspy Vocal", "Clean Vocal", "Falsetto Vocal", "Choir", "Gang Vocal", "Spoken Word", "Rap Vocal", "Instrumental"], "TEMPO": ["Very Slow Tempo", "Slow Tempo", "Mid-Slow Tempo", "Mid Tempo", "Upbeat", "Fast Tempo", "Very Fast Tempo"], "EXTRA": ["Bass Intro", "Catchy Chorus", "Call and Response", "Dynamic Breakdown", "Emotional Bridge", "Expressive Guitar Solo", "Instrumental Intro", "Key Change", "Melodic Guitar Solo", "Piano Intro", "Powerful Final Chorus", "Rhythmic Bass Line", "Short Intro", "Big Final Chorus", "Extended Outro", "Half-Time Breakdown", "Double-Time Chorus", "Layered Harmonies", "Syncopated Rhythm", "Driving Bassline", "Punchy Drums", "Ambient Intro", "Orchestral Build", "Minimal Verse", "Explosive Chorus"]};
const DEFAULT_PRESETS = [{"name": "フルミックス", "slots": ["STYLE", "STYLE", "INSTRUMENT", "INSTRUMENT", "MOOD", "VOCAL", "TEMPO", "EXTRA"]}, {"name": "STYLE ×1", "slots": ["STYLE"]}, {"name": "STYLE ×2", "slots": ["STYLE", "STYLE"]}, {"name": "STYLE2＋楽器2", "slots": ["STYLE", "STYLE", "INSTRUMENT", "INSTRUMENT"]}];

const KEYS = {
  data: "jzr_suno_dictionary_v1",
  presets: "jzr_suno_presets_v1",
  history: "jzr_suno_history_v1",
  favorites: "jzr_suno_favorites_v1",
  dupes: "jzr_suno_prevent_duplicates_v1"
};

const clone = obj => JSON.parse(JSON.stringify(obj));
const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : clone(fallback);
  } catch { return clone(fallback); }
};
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

let data = load(KEYS.data, DEFAULT_DATA);
let presets = load(KEYS.presets, DEFAULT_PRESETS);
let history = load(KEYS.history, []);
let favorites = load(KEYS.favorites, []);
let slots = Array.from({length:8}, () => ({kind:"OFF", value:"—", locked:false}));
let selectedHistory = -1, selectedFavorite = -1;
let currentCategory = Object.keys(data)[0] || "";
let selectedPreset = -1;
let spinning = false;

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const slotTypes = () => ["OFF", ...Object.keys(data)];
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function status(msg) { $("#status").textContent = msg; }
function toast(msg) {
  const el = document.createElement("div");
  el.className = "toast"; el.textContent = msg; document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}
async function copyText(text) {
  if (!text) return;
  try { await navigator.clipboard.writeText(text); }
  catch {
    const ta = document.createElement("textarea"); ta.value=text; document.body.appendChild(ta);
    ta.select(); document.execCommand("copy"); ta.remove();
  }
}

function uniqueNormalize(source) {
  const out={};
  for (const [key, vals] of Object.entries(source)) {
    const k=String(key).trim().toUpperCase();
    if (!k || k==="OFF") continue;
    const seen=new Set();
    out[k]=[];
    for (const raw of vals) {
      const v=String(raw).trim(), low=v.toLowerCase();
      if(v && !seen.has(low)){seen.add(low);out[k].push(v);}
    }
  }
  return out;
}

function renderSlots() {
  const host=$("#slots"); host.innerHTML="";
  slots.forEach((s,i)=>{
    const row=document.createElement("div"); row.className="slot";
    row.innerHTML=`
      <div class="slot-num">${String(i+1).padStart(2,"0")}</div>
      <select class="slot-kind"></select>
      <div class="slot-value"></div>
      <button class="btn reroll" title="この枠だけ再抽選">↻</button>
      <button class="btn lock" title="ロック">${s.locked?"🔒":"🔓"}</button>`;
    const select=row.querySelector(".slot-kind");
    slotTypes().forEach(t=>{ const o=document.createElement("option");o.value=t;o.textContent=t;select.appendChild(o); });
    select.value=s.kind;
    const value=row.querySelector(".slot-value");
    value.textContent=s.value;
    value.classList.toggle("off",s.kind==="OFF");
    value.classList.toggle("locked",s.locked);
    select.addEventListener("change",()=>{
      s.kind=select.value;s.locked=false;
      const vals=data[s.kind]||[];
      s.value=s.kind==="OFF"?"—":(vals.length?rand(vals):"—");
      renderSlots(); updatePrompt();
    });
    row.querySelector(".reroll").disabled=s.kind==="OFF";
    row.querySelector(".lock").disabled=s.kind==="OFF";
    row.querySelector(".reroll").addEventListener("click",()=>{ randomizeSlot(i,new Set());renderSlots();updatePrompt(); });
    row.querySelector(".lock").addEventListener("click",()=>{ if(s.kind!=="OFF"){s.locked=!s.locked;renderSlots();} });
    host.appendChild(row);
  });
}

function randomizeSlot(i, excluded=new Set()) {
  const s=slots[i];
  if(s.kind==="OFF"||s.locked)return;
  const vals=data[s.kind]||[];
  if(!vals.length){s.value="—";return;}
  let pool=vals.filter(v=>v!==s.value && !excluded.has(v));
  if(!pool.length) pool=vals.filter(v=>v!==s.value);
  if(!pool.length) pool=vals;
  s.value=rand(pool);
}

function updatePrompt() {
  const prompt=slots.filter(s=>s.kind!=="OFF"&&s.value!=="—").map(s=>s.value).join(", ");
  $("#promptText").value=prompt; updateCharCount();
}
function updateCharCount() { $("#charCount").textContent=`${$("#promptText").value.length} characters`; }

function applyPreset(p) {
  slots.forEach((s,i)=>{
    const kind=(p.slots[i]&&slotTypes().includes(p.slots[i]))?p.slots[i]:"OFF";
    s.kind=kind;s.locked=false;
    const vals=data[kind]||[];
    s.value=kind==="OFF"?"—":(vals.length?rand(vals):"—");
  });
  renderSlots();updatePrompt();status(`組み合わせ「${p.name}」を適用`);
}

function renderPresetButtons() {
  const host=$("#presetButtons");host.innerHTML="";
  presets.forEach(p=>{
    const b=document.createElement("button");b.className="btn subtle";b.textContent=p.name;
    b.addEventListener("click",()=>applyPreset(p));host.appendChild(b);
  });
}

async function spinRoulette() {
  if(spinning)return;
  if(!slots.some(s=>s.kind!=="OFF")){status("抽選するスロットがありません。");return;}
  spinning=true; const btn=$("#rouletteStart");btn.disabled=true;btn.textContent="🎰 ROULETTE...";
  status("Spinning...");
  for(let count=1;count<=32;count++){
    const used={};
    slots.forEach((s,i)=>{
      if(s.kind==="OFF")return;
      const ex=$("#preventDuplicates").checked ? (used[s.kind] ??= new Set()) : new Set();
      randomizeSlot(i,ex);
      if($("#preventDuplicates").checked && s.value!=="—") ex.add(s.value);
    });
    renderSlots(); updatePrompt();
    let delay=count<10?45:count<18?75:count<24?120:count<29?190:270;
    await new Promise(r=>setTimeout(r,delay));
  }
  addHistory();
  spinning=false;btn.disabled=false;btn.textContent="🎰 ROULETTE START";
  status("Roulette complete! / 履歴に保存しました");
}

function nowParts() {
  const d=new Date();
  const pad=n=>String(n).padStart(2,"0");
  return {
    date:`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`,
    time:`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
  };
}
function addHistory() {
  const prompt=$("#promptText").value.trim();if(!prompt)return;
  const t=nowParts();
  history.unshift({...t,prompt,slots:clone(slots.map(s=>({kind:s.kind,value:s.value})))});
  history=history.slice(0,500);save(KEYS.history,history);renderHistory();
}
function savedPreview(item,n=42) {
  const p=item.prompt||"";return `${item.date||""} ${item.time||""}  ${p.length<=n?p:p.slice(0,n)+"…"}`;
}
function renderHistory() {
  const host=$("#historyList");host.innerHTML="";
  history.forEach((item,i)=>{
    const d=document.createElement("div");d.className="saved-item"+(i===selectedHistory?" selected":"");
    d.textContent=savedPreview(item);d.addEventListener("click",()=>{selectedHistory=i;renderHistory();});
    d.addEventListener("dblclick",()=>{copyText(item.prompt);toast("履歴をコピーしました");});
    host.appendChild(d);
  });
}
function renderFavorites() {
  const host=$("#favoriteList");host.innerHTML="";
  favorites.forEach((item,i)=>{
    const d=document.createElement("div");d.className="saved-item"+(i===selectedFavorite?" selected":"");
    d.textContent=savedPreview(item,38);d.addEventListener("click",()=>{selectedFavorite=i;renderFavorites();});
    d.addEventListener("dblclick",()=>{copyText(item.prompt);toast("お気に入りをコピーしました");});
    host.appendChild(d);
  });
}
function restoreItem(item) {
  if(item.slots?.length){
    slots=Array.from({length:8},(_,i)=>{
      const x=item.slots[i]||{kind:"OFF",value:"—"};
      const kind=slotTypes().includes(x.kind)?x.kind:"OFF";
      return {kind,value:kind==="OFF"?"—":(x.value||"—"),locked:false};
    });
    renderSlots();updatePrompt();status("履歴の8枠構成を復元しました。");
  } else {
    $("#promptText").value=item.prompt||"";updateCharCount();status("プロンプトのみ復元しました。");
  }
}

function renderCategories() {
  const host=$("#categoryList");host.innerHTML="";
  Object.keys(data).forEach(k=>{
    const d=document.createElement("div");d.className="category-item"+(k===currentCategory?" selected":"");d.textContent=k;
    d.addEventListener("click",()=>{currentCategory=k;renderCategories();renderDictionaryItems();});
    host.appendChild(d);
  });
  renderDictionaryItems();
}
function filteredDictionary() {
  const q=$("#dictionarySearch").value.trim().toLowerCase();
  return (data[currentCategory]||[]).filter(v=>!q||v.toLowerCase().includes(q));
}
function renderDictionaryItems() {
  const vals=filteredDictionary();
  $("#dictionaryHeading").textContent=`${currentCategory||""}  ${(data[currentCategory]||[]).length}件 / 表示 ${vals.length}件`;
  const sel=$("#dictionaryItems");sel.innerHTML="";
  vals.forEach(v=>{const o=document.createElement("option");o.value=v;o.textContent=v;sel.appendChild(o);});
}
function selectedDictValue() {return $("#dictionaryItems").value||"";}

function renderPresetManager() {
  const list=$("#presetManageList");list.innerHTML="";
  presets.forEach((p,i)=>{
    const d=document.createElement("div");d.className="preset-manage-item"+(i===selectedPreset?" selected":"");d.textContent=p.name;
    d.addEventListener("click",()=>{selectedPreset=i;loadPresetEditor();renderPresetManager();});
    list.appendChild(d);
  });
  const ed=$("#presetSlotEditors");ed.innerHTML="";
  for(let i=0;i<8;i++){
    const row=document.createElement("div");row.className="preset-slot-row";
    row.innerHTML=`<span>${String(i+1).padStart(2,"0")}</span><select data-i="${i}"></select>`;
    const s=row.querySelector("select");
    slotTypes().forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;s.appendChild(o);});
    ed.appendChild(row);
  }
  loadPresetEditor();
}
function loadPresetEditor() {
  const p=presets[selectedPreset];
  $("#presetName").value=p?.name||"";
  $$("#presetSlotEditors select").forEach((s,i)=>s.value=p?.slots?.[i]||"OFF");
}

function bindUI() {
  $("[data-open='dictionaryModal']").onclick=()=>{renderCategories();$("#dictionaryModal").showModal();};
  $("[data-open='presetModal']").onclick=()=>{selectedPreset=presets.length?0:-1;renderPresetManager();$("#presetModal").showModal();};
  $("[data-open='aboutModal']").onclick=()=>$("#aboutModal").showModal();
  $$("[data-close]").forEach(b=>b.onclick=()=>$("#"+b.dataset.close).close());

  $("#rouletteStart").onclick=spinRoulette;
  $("#unlockAll").onclick=()=>{slots.forEach(s=>s.locked=false);renderSlots();status("全スロットのロックを解除しました。");};
  $("#preventDuplicates").checked=localStorage.getItem(KEYS.dupes)!=="false";
  $("#preventDuplicates").onchange=()=>localStorage.setItem(KEYS.dupes,String($("#preventDuplicates").checked));
  $("#promptText").addEventListener("input",updateCharCount);
  $("#copyPrompt").onclick=async()=>{await copyText($("#promptText").value.trim());status("✓ Suno貼り付け用プロンプトをコピーしました。");};

  $("#clearHistory").onclick=()=>{if(history.length&&confirm("ルーレット履歴をすべて削除しますか？")){history=[];selectedHistory=-1;save(KEYS.history,history);renderHistory();}};
  $("#historyCopy").onclick=async()=>{if(selectedHistory<0)return status("履歴を選択してください。");await copyText(history[selectedHistory].prompt);toast("履歴をコピーしました");};
  $("#historyFavorite").onclick=()=>{
    if(selectedHistory<0)return status("お気に入りにする履歴を選択してください。");
    const item=clone(history[selectedHistory]);
    const exists=favorites.some(x=>x.date===item.date&&x.time===item.time&&x.prompt===item.prompt);
    if(!exists){favorites.unshift(item);favorites=favorites.slice(0,200);save(KEYS.favorites,favorites);renderFavorites();status("★ お気に入りに追加しました。");}
    else status("すでにお気に入りにあります。");
  };
  $("#historyRestore").onclick=()=>{if(selectedHistory<0)return status("復元する履歴を選択してください。");restoreItem(history[selectedHistory]);};
  $("#historyDelete").onclick=()=>{if(selectedHistory<0)return;history.splice(selectedHistory,1);selectedHistory=-1;save(KEYS.history,history);renderHistory();};

  $("#favoriteCopy").onclick=async()=>{if(selectedFavorite<0)return status("お気に入りを選択してください。");await copyText(favorites[selectedFavorite].prompt);toast("お気に入りをコピーしました");};
  $("#favoriteRestore").onclick=()=>{if(selectedFavorite<0)return status("復元するお気に入りを選択してください。");restoreItem(favorites[selectedFavorite]);};
  $("#favoriteDelete").onclick=()=>{if(selectedFavorite<0)return;favorites.splice(selectedFavorite,1);selectedFavorite=-1;save(KEYS.favorites,favorites);renderFavorites();};

  $("#dictionarySearch").addEventListener("input",renderDictionaryItems);
  $("#dictionaryEntry").addEventListener("keydown",e=>{if(e.key==="Enter")$("#dictionaryAdd").click();});
  $("#dictionaryAdd").onclick=()=>{
    const v=$("#dictionaryEntry").value.trim();if(!currentCategory||!v)return;
    if(!data[currentCategory].some(x=>x.toLowerCase()===v.toLowerCase()))data[currentCategory].push(v);
    $("#dictionaryEntry").value="";renderDictionaryItems();
  };
  $("#dictionaryEdit").onclick=()=>{
    const old=selectedDictValue();if(!old)return alert("編集する項目を選択してください。");
    const v=prompt("項目編集",old);if(!v?.trim())return;
    const idx=data[currentCategory].indexOf(old);if(idx>=0)data[currentCategory][idx]=v.trim();renderDictionaryItems();
  };
  $("#dictionaryItems").ondblclick=()=>$("#dictionaryEdit").click();
  $("#dictionaryDelete").onclick=()=>{
    const old=selectedDictValue();if(!old)return alert("削除する項目を選択してください。");
    if(confirm(`「${old}」を削除しますか？`)){const i=data[currentCategory].indexOf(old);if(i>=0)data[currentCategory].splice(i,1);renderDictionaryItems();}
  };
  const moveDict=delta=>{
    const old=selectedDictValue();if(!old)return alert("移動する項目を選択してください。");
    const a=data[currentCategory],i=a.indexOf(old),j=i+delta;if(j<0||j>=a.length)return;
    [a[i],a[j]]=[a[j],a[i]];renderDictionaryItems();$("#dictionaryItems").value=old;
  };
  $("#dictionaryUp").onclick=()=>moveDict(-1);$("#dictionaryDown").onclick=()=>moveDict(1);
  $("#dictionaryDedupe").onclick=()=>{const seen=new Set();data[currentCategory]=data[currentCategory].filter(x=>{const k=x.trim().toLowerCase();if(!k||seen.has(k))return false;seen.add(k);return true;});renderDictionaryItems();};
  $("#addCategory").onclick=()=>{let n=prompt("カテゴリ名");if(!n)return;n=n.trim().toUpperCase();if(!n||n==="OFF")return;if(data[n])return alert("同じカテゴリがあります。");data[n]=[];currentCategory=n;renderCategories();};
  $("#renameCategory").onclick=()=>{if(!currentCategory)return;let n=prompt("新しいカテゴリ名",currentCategory);if(!n)return;n=n.trim().toUpperCase();if(!n||n==="OFF")return;if(data[n]&&n!==currentCategory)return alert("同じカテゴリがあります。");const next={};Object.entries(data).forEach(([k,v])=>next[k===currentCategory?n:k]=v);data=next;currentCategory=n;renderCategories();};
  $("#deleteCategory").onclick=()=>{if(!currentCategory)return;if(confirm(`${currentCategory} を削除しますか？`)){delete data[currentCategory];currentCategory=Object.keys(data)[0]||"";renderCategories();}};
  $("#dictionaryBulk").onclick=()=>{$("#bulkLabel").textContent=`${currentCategory} に1行1項目で貼り付け`;$("#bulkText").value="";$("#bulkModal").showModal();};
  $("#bulkRegister").onclick=()=>{const lines=$("#bulkText").value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);const existing=new Set((data[currentCategory]||[]).map(x=>x.toLowerCase()));let c=0;lines.forEach(x=>{if(!existing.has(x.toLowerCase())){data[currentCategory].push(x);existing.add(x.toLowerCase());c++;}});renderDictionaryItems();$("#bulkModal").close();alert(`${c}件追加しました。`);};
  $("#dictionaryMerge").onclick=()=>{for(const [cat,vals] of Object.entries(DEFAULT_DATA)){data[cat]??=[];const ex=new Set(data[cat].map(x=>x.toLowerCase()));vals.forEach(v=>{if(!ex.has(v.toLowerCase())){data[cat].push(v);ex.add(v.toLowerCase());}});}renderCategories();alert("初期辞書を追加しました。");};
  $("#dictionarySave").onclick=()=>{data=uniqueNormalize(data);save(KEYS.data,data);renderSlots();renderPresetButtons();$("#dictionaryModal").close();status("辞書を保存しました。");};

  $("#presetNew").onclick=()=>{selectedPreset=-1;$("#presetName").value="";$$("#presetSlotEditors select").forEach(s=>s.value="OFF");renderPresetManager();};
  $("#presetCapture").onclick=()=>{$$("#presetSlotEditors select").forEach((s,i)=>s.value=slots[i].kind);};
  $("#presetSave").onclick=()=>{
    const name=$("#presetName").value.trim();if(!name)return alert("ボタン名を入力してください。");
    const p={name,slots:$$("#presetSlotEditors select").map(s=>s.value)};
    if(selectedPreset>=0)presets[selectedPreset]=p;
    else {const hit=presets.findIndex(x=>x.name===name);if(hit>=0)presets[hit]=p;else presets.push(p);}
    save(KEYS.presets,presets);renderPresetButtons();selectedPreset=Math.max(0,presets.findIndex(x=>x.name===name));renderPresetManager();
  };
  $("#presetDelete").onclick=()=>{if(selectedPreset<0)return;presets.splice(selectedPreset,1);selectedPreset=Math.min(selectedPreset,presets.length-1);save(KEYS.presets,presets);renderPresetButtons();renderPresetManager();};
  const movePreset=d=>{if(selectedPreset<0)return;const j=selectedPreset+d;if(j<0||j>=presets.length)return;[presets[selectedPreset],presets[j]]=[presets[j],presets[selectedPreset]];selectedPreset=j;save(KEYS.presets,presets);renderPresetButtons();renderPresetManager();};
  $("#presetUp").onclick=()=>movePreset(-1);$("#presetDown").onclick=()=>movePreset(1);
}

function init() {
  data=uniqueNormalize(data);
  renderSlots();renderPresetButtons();renderHistory();renderFavorites();bindUI();updatePrompt();
  status(`Version 1.0.0 Web / STYLE ${(data.STYLE||[]).length}件 / ブラウザ内に自動保存`);
}
document.addEventListener("DOMContentLoaded",init);
