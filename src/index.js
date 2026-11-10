export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return new Response("SahiMilo Kisan is running", {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }
    return new Response(PAGE, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin"
      }
    });
  }
};

const PAGE = String.raw`<!doctype html>
<html lang="hi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#14532d">
<meta name="description" content="SahiMilo Kisan: Kheti ki zaroorat, salah, machinery, inputs aur bazaar se judi madad ek jagah. Bihar se shuruaat.">
<title>SahiMilo Kisan | Kheti Ki Har Zaroorat, Ek Hi Jagah</title>
<style>
:root{--green:#14532d;--deep:#0b3520;--leaf:#27834a;--lime:#d9f99d;--cream:#fbfaf4;--ink:#17251b;--muted:#637267;--line:#e4e9df;--white:#fff;--gold:#f3bd4b}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6}a{color:inherit;text-decoration:none}.wrap{width:min(1140px,calc(100% - 40px));margin:auto}.topbar{background:var(--deep);color:#e9f5e9;font-size:13px;padding:8px 0}.topbar .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}.nav{height:78px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:11px;font-weight:850;font-size:21px;letter-spacing:-.5px;color:var(--green)}.brandmark{width:43px;height:43px;border-radius:14px;background:var(--green);display:grid;place-items:center;color:#fff;font-size:23px}.brand small{display:block;font-size:10px;letter-spacing:1.6px;color:var(--muted);font-weight:700;margin-top:-5px}.navlinks{display:flex;align-items:center;gap:25px;color:#425447;font-size:14px;font-weight:650}.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;padding:13px 21px;background:var(--green);color:white;font-weight:750;font-size:14px;cursor:pointer;transition:.2s}.btn:hover{background:#0d3e23;transform:translateY(-1px)}.btn.light{background:white;color:var(--green);border:1px solid #dce8dc}.btn.gold{background:var(--gold);color:#34250a}.hero{padding:54px 0 66px;background:radial-gradient(circle at 82% 22%,#e5f3d7 0,transparent 27%),linear-gradient(130deg,#f7faef,#edf5e8);overflow:hidden}.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}.eyebrow{display:inline-flex;align-items:center;gap:8px;border:1px solid #d5e6d1;background:#f8fff3;border-radius:99px;padding:7px 13px;color:var(--green);font-size:12px;font-weight:800;letter-spacing:.3px}.dot{width:7px;height:7px;background:#3b9b54;border-radius:50%}h1{font-size:clamp(40px,5.4vw,66px);line-height:1.06;letter-spacing:-2.5px;color:var(--deep);margin:22px 0 18px}.hero p{font-size:18px;color:#58695c;max-width:560px;margin:0 0 27px}.actions{display:flex;gap:12px;flex-wrap:wrap}.micro{margin-top:18px;font-size:12px;color:#718075}.visual{min-height:390px;position:relative;display:grid;place-items:center}.field-art{width:min(100%,490px);aspect-ratio:1.08;border-radius:36px;background:linear-gradient(145deg,#1c6738,#0d3a24);position:relative;overflow:hidden;box-shadow:0 25px 60px #174b3029}.sun{position:absolute;width:92px;height:92px;border-radius:50%;background:#f7d77e;right:66px;top:52px}.hill{position:absolute;bottom:-65px;width:130%;height:230px;border-radius:50% 50% 0 0}.h1{background:#8fbd61;left:-20%;transform:rotate(-9deg)}.h2{background:#4c914e;left:20%;bottom:-110px;transform:rotate(8deg)}.furrow{position:absolute;bottom:20px;left:8%;width:90%;height:120px;border-top:3px solid #c9df83;transform:rotate(-14deg);border-radius:50%;opacity:.85}.farmer{position:absolute;left:38%;bottom:76px;font-size:112px;filter:drop-shadow(0 10px 8px #15351e55)}.art-label{position:absolute;left:22px;top:22px;color:#e9f5dc;font-size:12px;font-weight:800;letter-spacing:1.3px}.floating{position:absolute;background:#fff;border:1px solid #e5ecdf;border-radius:16px;padding:13px 16px;box-shadow:0 12px 35px #163d201c;font-size:12px;font-weight:750;color:var(--green)}.float-a{left:-8px;top:55px}.float-b{right:-10px;bottom:52px}.section{padding:78px 0}.section.white{background:#fff}.section-head{text-align:center;max-width:690px;margin:0 auto 38px}.kicker{font-size:11px;letter-spacing:1.7px;font-weight:850;color:var(--leaf);text-transform:uppercase}.section h2{font-size:clamp(28px,3.5vw,42px);line-height:1.15;letter-spacing:-1.2px;color:var(--deep);margin:10px 0 12px}.section-head p{color:var(--muted);margin:0}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:17px}.service{padding:24px;background:white;border:1px solid var(--line);border-radius:19px;min-height:190px;transition:.2s}.white .service{background:#fbfcf8}.service:hover{transform:translateY(-4px);box-shadow:0 14px 30px #1b49200c}.ico{width:48px;height:48px;border-radius:15px;background:#edf6e9;display:grid;place-items:center;font-size:24px;margin-bottom:17px}.service h3{font-size:17px;color:var(--deep);margin:0 0 7px}.service p{font-size:13px;color:var(--muted);margin:0}.split{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.checks{display:grid;gap:15px;margin:25px 0}.check{display:flex;gap:12px;align-items:flex-start}.tick{flex:0 0 25px;width:25px;height:25px;border-radius:50%;background:#e4f3df;color:#26723d;display:grid;place-items:center;font-weight:900}.check b{display:block;color:var(--deep);font-size:15px}.check span{font-size:13px;color:var(--muted)}.promise{background:#123e27;color:white;border-radius:26px;padding:34px;position:relative;overflow:hidden}.promise:after{content:"🌾";position:absolute;font-size:150px;right:12px;bottom:-42px;opacity:.14}.promise h3{font-size:27px;line-height:1.2;margin:0 0 12px;max-width:360px}.promise p{color:#d1e4d3;font-size:14px;max-width:370px}.promise .tag{display:inline-block;background:#ffffff1b;color:#e5f6dc;border-radius:99px;padding:6px 11px;font-size:11px;font-weight:800;margin-bottom:17px}.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.step{padding:24px;border-radius:18px;background:#f8faf5;border:1px solid var(--line)}.num{font-size:12px;font-weight:900;color:#7aa66c;letter-spacing:1px}.step h3{font-size:17px;color:var(--deep);margin:10px 0 6px}.step p{font-size:13px;color:var(--muted);margin:0}.cta{background:#eaf3e4;padding:60px 0}.cta-inner{display:flex;align-items:center;justify-content:space-between;gap:25px}.cta h2{font-size:34px;line-height:1.12;color:var(--deep);margin:0 0 8px}.cta p{margin:0;color:var(--muted);font-size:14px}.contact{display:grid;grid-template-columns:.85fr 1.15fr;gap:30px;align-items:start}.contact-card{background:var(--deep);color:#fff;padding:30px;border-radius:22px}.contact-card h3{font-size:24px;margin:0 0 12px}.contact-card p{font-size:14px;color:#d2e4d4}.contact-card a{color:#d9f99d;font-weight:750}.form{background:#fff;border:1px solid var(--line);padding:27px;border-radius:22px}.form h3{margin:0 0 18px;color:var(--deep)}.fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}.field{display:grid;gap:6px}.field.full{grid-column:1/-1}.field label{font-size:12px;font-weight:750;color:#435647}.field input,.field select,.field textarea{width:100%;border:1px solid #dce5d9;border-radius:10px;padding:12px;font:inherit;font-size:14px;background:#fcfdfb;color:var(--ink)}.field textarea{min-height:85px;resize:vertical}.form-note{font-size:11px;color:#758278;margin:12px 0 0}.footer{background:#0b2f1d;color:#d4e4d6;padding:40px 0 22px}.footrow{display:flex;justify-content:space-between;gap:25px;flex-wrap:wrap}.footer .brand{color:#fff}.footer .brand small{color:#b8cfbd}.footer p{font-size:12px;color:#b8cdbb;max-width:400px}.footbottom{border-top:1px solid #ffffff20;margin-top:28px;padding-top:17px;font-size:11px;color:#9db5a2;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}.mobile-cta{display:none}
@media(max-width:800px){.navlinks{display:none}.hero-grid,.split,.contact{grid-template-columns:1fr}.hero{padding:38px 0 48px}.visual{min-height:320px}.field-art{max-width:440px}.grid{grid-template-columns:repeat(2,1fr)}.steps{grid-template-columns:1fr}.cta-inner{align-items:flex-start;flex-direction:column}.section{padding:58px 0}}
@media(max-width:520px){.wrap{width:min(100% - 28px,1140px)}.topbar .wrap{font-size:11px}.nav{height:68px}.brand{font-size:18px}.brandmark{width:39px;height:39px}.nav>.btn{padding:10px 14px;font-size:12px}.hero h1{letter-spacing:-1.7px}.hero p{font-size:16px}.visual{min-height:270px}.field-art{border-radius:25px}.farmer{font-size:86px;bottom:55px}.sun{width:65px;height:65px;right:40px;top:35px}.floating{font-size:10px;padding:10px 12px}.float-a{left:-3px;top:28px}.float-b{right:-3px;bottom:28px}.grid{grid-template-columns:1fr}.fields{grid-template-columns:1fr}.field.full{grid-column:auto}.promise{padding:26px}.cta h2{font-size:29px}.mobile-cta{display:flex;position:fixed;bottom:12px;left:12px;right:12px;z-index:10;box-shadow:0 8px 25px #102d1c35}.footer{padding-bottom:82px}}
</style>
</head>
<body>
<div class="topbar"><div class="wrap"><span>🌱 Bihar se shuruaat, kisano ke saath</span><span>Seedhi baat • Bharosemand madad • Kisan pehle</span></div></div>
<header class="wrap nav">
<a class="brand" href="#"><span class="brandmark">🌾</span><span>SahiMilo Kisan<small>KHETI KI HAR ZAROORAT</small></span></a>
<nav class="navlinks"><a href="#services">Hamari Services</a><a href="#about">Hamare Baare Mein</a><a href="#how">Kaise Kaam Karein</a><a href="#contact">Sampark</a></nav>
<a class="btn" href="#contact">Madad Chahiye?</a>
</header>
<main>
<section class="hero"><div class="wrap hero-grid">
<div><span class="eyebrow"><i class="dot"></i> Kisan ke liye, kisan ke saath</span>
<h1>Kheti ki har zaroorat,<br><span style="color:#39844a">ek hi jagah.</span></h1>
<p>Fasal ki salah se lekar kheti ke samaan, machine booking aur bazaar tak pahunchne mein madad. SahiMilo Kisan aapke saath hai.</p>
<div class="actions"><a class="btn" href="#contact">Apni Zaroorat Batayein&nbsp; →</a><a class="btn light" href="#services">Services Dekhein</a></div>
<div class="micro">Shuruaat Bihar se. Aapki zaroorat aur suvidha ke hisaab se madad.</div></div>
<div class="visual"><div class="field-art"><div class="art-label">SAHIMILO KISAN · BIHAR</div><div class="sun"></div><div class="hill h1"></div><div class="hill h2"></div><div class="furrow"></div><div class="farmer">🧑🏽‍🌾</div></div><div class="floating float-a">🌿 Fasal aur kheti ki salah</div><div class="floating float-b">🚜 Machine aur seva booking</div></div>
</div></section>
<section class="section" id="services"><div class="wrap"><div class="section-head"><div class="kicker">Aapki kheti, hamari zimmedari</div><h2>Kheti ke har kadam par madad</h2><p>Ek hi jagah par zaroori jaankari aur services tak pahunch banane ki koshish.</p></div>
<div class="grid">
<article class="service"><div class="ico">🌱</div><h3>Fasal aur Kheti Salah</h3><p>Fasal chunav, bowaai, khaad, sinchai aur fasal ki dekhbhal se judi jaankari.</p></article>
<article class="service"><div class="ico">🧪</div><h3>Beej, Khaad aur Input</h3><p>Kheti ke zaroori samaan aur upyukt suppliers tak pahunchne mein madad.</p></article>
<article class="service"><div class="ico">🚜</div><h3>Tractor aur Machinery</h3><p>Tractor, rotavator, thresher aur anya krishi yantra booking mein sahayata.</p></article>
<article class="service"><div class="ico">🛡️</div><h3>Yojana aur Fasal Bima</h3><p>Sarkari yojana, application process aur fasal bima ki jaankari samajhne mein madad.</p></article>
<article class="service"><div class="ico">🛒</div><h3>Fasal Bechne Mein Madad</h3><p>Fasal ke buyers, mandi aur behtar bikri ke vikalpon tak pahunch banane mein sahayata.</p></article>
<article class="service"><div class="ico">🚚</div><h3>Transport aur Delivery</h3><p>Kheti ke samaan aur fasal ke transport ke liye local suvidhaon se jodne ki koshish.</p></article>
</div></div></section>
<section class="section white" id="about"><div class="wrap split">
<div><div class="kicker">Kisan pehle</div><h2>Technology ko banayein aapki kheti ka saathi.</h2><p style="color:var(--muted)">Har kisan ko sahi jaankari aur zaroori seva tak aasaan pahunch milni chahiye. SahiMilo Kisan ka maksad hai gaon aur kisan ki asli zarooraton ko samajhkar practical madad pahunchana.</p>
<div class="checks">
<div class="check"><span class="tick">✓</span><div><b>Aasaan bhasha aur seedha sampark</b><span>Kam digital anubhav wale kisano ko dhyan mein rakhkar.</span></div></div>
<div class="check"><span class="tick">✓</span><div><b>Local zarooraton par dhyan</b><span>Bihar ke gaon aur kheti ke hisaab se services ko jodna.</span></div></div>
<div class="check"><span class="tick">✓</span><div><b>Saaf jaankari, bina jhoothe vaade</b><span>Yojana, subsidy ya munafe ki guarantee nahi. Sahi process aur verified jaankari par zor.</span></div></div>
</div><a class="btn" href="#contact">Humse Judein</a></div>
<div class="promise"><span class="tag">HAMARA VAADA</span><h3>Kisan ka samay, mehnat aur bharosa anmol hai.</h3><p>Hum aisi suvidha banana chahte hain jo kheti ke faislon ko thoda aasaan kare aur sahi logon tak pahunch banaye.</p></div>
</div></section>
<section class="section" id="how"><div class="wrap"><div class="section-head"><div class="kicker">Shuruaat bahut aasaan</div><h2>Madad paane ke 3 seedhe kadam</h2><p>Apni zaroorat batayein. Hamari team aapse sampark karegi aur agla kadam samjhayegi.</p></div>
<div class="steps"><div class="step"><div class="num">01 / BATAYEIN</div><h3>Apni zaroorat share karein</h3><p>Naam, gaon aur kis tarah ki kheti ya seva chahiye, bas itni jaankari dein.</p></div><div class="step"><div class="num">02 / BAAT KAREIN</div><h3>Hum aapse sampark karenge</h3><p>Phone ya email par zaroorat samajhkar upalabdh vikalp batayenge.</p></div><div class="step"><div class="num">03 / AAGE BADHEIN</div><h3>Sahi vikalp chunein</h3><p>Jaankari samajhkar apni suvidha aur faisle ke hisaab se aage badhein.</p></div></div></div></section>
<section class="cta"><div class="wrap cta-inner"><div><h2>Aapki kheti ko kis cheez ki zaroorat hai?</h2><p>Humein batayein. Hum aapki baat sunna chahte hain.</p></div><a class="btn gold" href="#contact">Abhi Sampark Karein&nbsp; →</a></div></section>
<section class="section" id="contact"><div class="wrap"><div class="section-head"><div class="kicker">Sampark karein</div><h2>Apni zaroorat humein batayein</h2><p>Filhaal hum Bihar ke kisano ki zarooraton ko samajhkar services shuru kar rahe hain.</p></div>
<div class="contact"><div class="contact-card"><h3>Chaliye, baat shuru karte hain.</h3><p>Aap kisan hain, supplier hain ya krishi seva dena chahte hain? Humein apni details bhejein.</p><p>📧 Email<br><a href="mailto:sahimilo.in@gmail.com">sahimilo.in@gmail.com</a></p><p>📍 Shuruaat<br>Bihar, India</p><p style="font-size:11px;color:#a9c4ae">Aapki details ka istemal sirf aapki enquiry ka jawab dene ke liye kiya jayega.</p></div>
<form class="form" id="enquiry"><h3>Enquiry Form</h3><div class="fields">
<div class="field"><label for="name">Aapka naam *</label><input id="name" name="name" required placeholder="Poora naam"></div>
<div class="field"><label for="phone">Mobile number *</label><input id="phone" name="phone" inputmode="tel" required pattern="[0-9+ -]{10,15}" placeholder="10 digit mobile number"></div>
<div class="field"><label for="village">Gaon / Shehar *</label><input id="village" name="village" required placeholder="Gaon ya shehar"></div>
<div class="field"><label for="district">Zila</label><input id="district" name="district" placeholder="Jaise Sitamarhi"></div>
<div class="field full"><label for="need">Aapko kis cheez ki zaroorat hai? *</label><select id="need" name="need" required><option value="">Chunein</option><option>Fasal aur kheti salah</option><option>Beej, khaad ya krishi input</option><option>Tractor / machinery booking</option><option>Sarkari yojana / fasal bima</option><option>Fasal bechne mein madad</option><option>Transport / delivery</option><option>Supplier / service provider registration</option><option>Other</option></select></div>
<div class="field full"><label for="message">Thoda aur batayein</label><textarea id="message" name="message" placeholder="Apni zaroorat yahan likhein (optional)"></textarea></div>
<div class="field full"><button class="btn" type="submit">Enquiry Email Karein&nbsp; →</button></div>
</div><p class="form-note">Submit karne par aapke device ka email app khulega. Abhi website par enquiry database connect nahi hai.</p></form></div></div></section>
</main>
<footer class="footer"><div class="wrap"><div class="footrow"><div><a class="brand" href="#"><span class="brandmark">🌾</span><span>SahiMilo Kisan<small>Kheti Ki Har Zaroorat, Ek Hi Jagah.</small></span></a><p>Kisano ke liye jaankari, services aur bazaar tak pahunch ko aasaan banane ki ek pehal.</p></div><div><b>Quick Links</b><p><a href="#services">Services</a><br><a href="#about">About</a><br><a href="#contact">Contact</a></p></div></div><div class="footbottom"><span>© <span id="year"></span> SahiMilo Kisan. All rights reserved.</span><span>Bihar, India</span></div></div></footer>
<a class="btn mobile-cta" href="#contact">🌾 Kisan Enquiry Karein</a>
<script>
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("enquiry").addEventListener("submit",function(e){
 e.preventDefault();const d=new FormData(this);
 const subject=encodeURIComponent("SahiMilo Kisan enquiry - "+d.get("name"));
 const body=encodeURIComponent("Name: "+d.get("name")+"\nMobile: "+d.get("phone")+"\nVillage/City: "+d.get("village")+"\nDistrict: "+d.get("district")+"\nRequirement: "+d.get("need")+"\nMessage: "+d.get("message"));
 window.location.href="mailto:sahimilo.in@gmail.com?subject="+subject+"&body="+body;
});
</script>
</body></html>`;
