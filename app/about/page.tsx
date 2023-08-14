"use client";

import { useState } from "react";
import Link from "next/link";

export default () => {
  const [useHighContrast, setUseHighContrast] = useState(false);

  return (
    <div id="about" className={`text-left text-2xl transition-colors ${useHighContrast ? "text-[#e2a2a2]" : "text-bloodhunt-red"}`}>
      <div>
        <span className="text-3xl">
          <Link href="/">The Omnis Challenge</Link> was a Bloodhunt ARG created by{" "}
          <a href="https://twitter.com/MozzyFX" target="_blank">
            Leon San José Larsson
          </a>{" "}
          and{" "}
          <a href="https://twitter.com/tobiassolem" target="_blank">
            Tobias Solem
          </a>{" "}
          at Sharkmob.{" "}
          <a href="https://github.com/leonlarsson/omnis-arg-public" target="_blank" title="View the source code.">
            <i className="fa-brands fa-github" />
          </a>
        </span>
        <br />
        <button className="my-2 bg-bloodhunt-red p-2 text-white" onClick={() => setUseHighContrast(!useHighContrast)}>
          {useHighContrast ? "Disable" : "Enable"} high contrast
        </button>
      </div>

      <hr />

      <div className="mb-2 text-4xl">
        <i className="fa-solid fa-align-left me-3" />
        Summary
      </div>

      <p>
        The Omnis Challenge was an ARG for the game Bloodhunt. It ran from Thursday, April 27th to Monday, May 1st 2023. The ARG is now over and winners have been contacted to receive their rewards, but the website is still available in case you want to test your skills. Below you can also see
        details on the steps required to solve all the stages, in addition to the total attempts on that stage, as well as a timer showing the amount of time the community spent solving it.
      </p>

      <br />

      <p>On behalf of Sharkmob, I thank you all for participating in this event. It was extremely fun to build and especially fun seeing the community come together to solve some pretty difficult tasks. In total, we had 27,361 attempts in stages 1-10 from users in 50 different countries.</p>

      <br />

      <span style={{ marginBottom: 0 }}>
        <i className="fa-solid fa-trophy" style={{ marginRight: 5 }} /> The{" "}
        <a href="/stash-external/prizes.jpg" target="_blank">
          prizes
        </a>{" "}
        were:
      </span>

      <ul>
        <li>1st: Omnis statue, Xtrfy Bloodhunt keyboard, Gamer Advantage glasses, 3,000 tokens</li>
        <li>2nd: Xtrfy Bloodhunt keyboard, Gamer Advantage glasses, 1,000 tokens</li>
        <li>3rd: Xtrfy Bloodhunt keyboard, Gamer Advantage glasses, 500 tokens</li>
        <li>4th: Xtrfy Bloodhunt keyboard, Gamer Advantage glasses, 300 tokens</li>
        <li>5th: Xtrfy Bloodhunt keyboard, Gamer Advantage glasses, 300 tokens</li>
      </ul>

      <br />

      <span id="subtitle">
        Additionally, and to celebrate the community's efforts, everyone can redeem a special Avatar &amp; Banner using the code <span className="correct-answer">OMNISCHALLENGE23</span>{" "}
        <a href="https://bloodhunt.com/profile/redeem-code" target="_blank">
          here
        </a>
        .
      </span>

      <hr />

      <div className="mb-2 text-4xl">
        <i className="fa-solid fa-list-check me-3" />
        Stages
      </div>

      {/* STAGE 0 */}
      <a href="https://bloodhunt.com/news/the-omnis-challenge" target="_blank" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 0:
      </a>

      <br />

      <span id="subtitle">
        <i className="fa-solid fa-clock" /> 45 minutes spent solving
      </span>

      <ul className="list" id="subtitle">
        <li>
          At 5PM CEST, April 27th, a{" "}
          <a href="https://twitter.com/Bloodhunt/status/1651602770925944835" target="_blank">
            Tweet
          </a>{" "}
          and an{" "}
          <a href="https://bloodhunt.com/news/the-omnis-challenge" target="_blank">
            article on Bloodhunt.com
          </a>{" "}
          are published announcing The Omnis Challenge
        </li>
        <li>
          The article includes a <a href="/stash-external/omnisopenme.zip">ZIP file</a> accompanied with an{" "}
          <a href="/stash-external/omnis-street.jpg" target="_blank">
            image of Omnis in Bloodhunt's Prague
          </a>
        </li>
        <li>The task is to figure out the street name that Omnis is standing on and use that as the ZIP file password</li>
        <li>
          After some map-searching, the conclusion is that Omnis is standing on the street <span className="correct-answer">zelezna</span>, which is the correct password
        </li>
        <li>
          Inside the ZIP file are 2 files,{" "}
          <a href="/stash-external/qr_code.jpg" target="_blank">
            qr_code.jpg
          </a>{" "}
          and{" "}
          <a href="/stash-external/SHA.jpg" target="_blank">
            SHA.jpg
          </a>
        </li>
        <li>
          The QR code text is <q>gssor://aknncgtms.bnl/nlmhr</q>. Decrypted with a 1 shift Caesar cipher it says{" "}
          <a href="https://www.bloodhunt.com/omnis" target="_blank">
            https://www.bloodhunt.com/omnis
          </a>
        </li>
        <li>
          Going to this page, or to{" "}
          <a href="https:/omnis.pages.dev" target="_blank">
            https:/omnis.pages.dev
          </a>{" "}
          will lead to stage 1 of The Omnis Challenge
        </li>
      </ul>

      <br />

      {/* STAGE 1 */}
      <Link href="/stages/part1-62cc0e08-a230-43e0-a7d2-4d1fd14af939" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 1:
      </Link>

      <br />

      <span id="subtitle">
        2,735 total attempts with 962 correct // <i className="fa-solid fa-clock" /> 40 minutes spent solving // <i className="fa-solid fa-user" /> 498 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The title is <q>Enter your answer with style</q>
        </li>
        <li>
          A clue is located inside the CSS file (<b>style</b>sheet)
        </li>
        <li>
          The clue is a HEX string, <q>56 4F 56 4C 4F 4C 54 4F 54 41 56 4F 56 41 20 52 4F 52 49 56 4F 56 45 52 4F 52</q>
        </li>
        <li>
          When converted to ASCII, will present <q>VOVLOLTOTAVOVA RORIVOVEROR</q>.
        </li>
        <li>
          Using Swedish{" "}
          <a href="https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket" target="_blank">
            Rövarspråk
          </a>
          , this can be translated to <span className="correct-answer">Vltava River</span>, which is the correct answer
        </li>
      </ul>

      <br />

      {/* STAGE 2 */}
      <Link href="/stages/part2-d40d2703-e230-4786-a366-6f6e2828794b" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 2:
      </Link>

      <br />

      <span id="subtitle">
        1,230 total attempts with 924 correct // <i className="fa-solid fa-clock" /> 4 minutes spent solving // <i className="fa-solid fa-user" /> 434 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The clue is in the title,{" "}
          <q>
            ISam17.51 <i className="fa-solid fa-ankh" />
          </q>
        </li>
        <li>
          <q>ISam17.51</q> can be found on a wall in the Garage, where using Heightened Senses will reveal the text <q>Shielded by faith</q>
        </li>
        <li>
          If you type in <q>shielded by faith</q>, they will get another clue, <q>Philistine is something else.</q>
        </li>
        <li>
          The correct answer is <span className="correct-answer">Goliath</span> which is connected to the reference above
        </li>
      </ul>

      <br />

      {/* STAGE 3 */}
      <Link href="/stages/part3-9c615232-e6d8-46a1-ad42-c03ae9fc9703" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 3:
      </Link>

      <br />

      <span id="subtitle">
        9,755 total attempts with 963 correct // <i className="fa-solid fa-clock" /> 16 hours, 15 minutes spent solving // <i className="fa-solid fa-user" /> 463 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The clue is in the title <q>§1 Omnis Chambers</q>
        </li>
        <li>
          The first paragraph of text on a wall in the Omnis Chambers in Elysium reads <q>co mtpv ti deimg zdk n znhy dntc ykimzf wx ypb pvfivux ezvhzh dcost tdhiwm dqy ezh jxwe 5 rzteh.</q>
        </li>
        <li>
          This is an Enigma cipher, that when solved with various clues around the Prague map, the final answer becomes <span className="correct-answer">my name is edvin and i have been living in the massive bunker under prague for the last 5 years.</span>
        </li>
      </ul>

      <br />

      {/* STAGE 4 */}
      <Link href="/stages/part4-61be5a2e-b8d0-47bf-8c92-f6b14f9f2ae7" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 4:
      </Link>

      <br />

      <span id="subtitle">
        582 total attempts with 428 correct // <i className="fa-solid fa-clock" /> 1 minute spent solving // <i className="fa-solid fa-user" /> 275 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>The title is a poem/riddle</li>
        <li>
          The answer is <span className="correct-answer">an echo</span>, or just <span className="correct-answer">echo</span>
        </li>
      </ul>

      <br />

      {/* STAGE 5 */}
      <Link href="/stages/part5-8eb95950-e1f2-43b1-86f7-5bdbacfbbaaf" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 5:
      </Link>

      <br />

      <span id="subtitle">
        1,196 total attempts with 340 correct // <i className="fa-solid fa-clock" /> 1 hour, 15 minutes spent solving // <i className="fa-solid fa-user" /> 269 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The title is <q>Sky. Chambers. RF - Secrecy needed. ROT13 answer wanted.</q>
        </li>
        <li>Sky meaning the page title, Chambers meaning the Omnis chambers, and RF meaning the Rail fence cipher</li>
        <li>
          The document title is a ciphertext <q style={{ overflowWrap: "break-word" }}>sTiDOpnADnmSegoHuHhlSacAnHLdSSsAhDDsAraSetHhsytHooSunADaLAHSS</q>
        </li>
        <li>
          When decoded with Rail fence using the positions of 2 letters in Omnis Chambers (T -&gt; 20 = key, S -&gt; 19 = offset). The text revealed is the path to a{" "}
          <a href="/stash/omnis-hands-you-another-clue.png" target="_blank">
            dark image
          </a>
        </li>
        <li>Manipulating the brightness on this image will give you the chance to spot sets of letters scattered across the image</li>
        <li>When these letters are combined correctly, they read F.W. Murnau, the initials of a movie director</li>
        <li>
          One of the movies of said director is <q>Nosferatu</q>
        </li>
        <li>
          Entering the name and release year of the movie in ROT13, <span className="correct-answer">Abfsrengh (1922)</span> will lead to stage 6
        </li>
      </ul>

      <br />

      {/* STAGE 6 */}
      <Link href="/stages/part6-cabbe8cf-cb8f-4301-9b97-9f007ac9f326" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 6:
      </Link>

      <br />

      <span id="subtitle">
        2,796 total attempts with 220 correct // <i className="fa-solid fa-clock" /> 16 hours, 45 minutes spent solving // <i className="fa-solid fa-user" /> 278 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The title is <q>Search. Listen. Report. - 🔑 Bring back an encrypted message 🔑</q>
        </li>
        <li>
          In the HTML, you will find 2 encoded HEX strings. Each one will lead to an audio file (
          <a href="/stash/deception.mp3" target="_blank">
            deception.mp3
          </a>
          ,{" "}
          <a href="/stash/unrelated.mp3" target="_blank">
            unrelated.mp3
          </a>
          )
        </li>
        <li>The first audio file is a reversed clip of Omnis talking in German about deception and quoting The Art of War</li>
        <li>The second audio file is a reversed clip from a documentary about The Ministry for State Security, aka Stasi</li>
        <li>
          Encoding the German name of the book, <q>die kunst des krieges</q> with Vigenère using the key
          <q>stasi</q> will result in <span className="correct-answer">vbe ccflt vmk dramyxs</span>, which is the correct answer
        </li>
      </ul>

      <br />

      {/* STAGE 7 */}
      <Link href="/stages/part7-07c84e24-8e47-445e-a8f5-aead7bbf3e22" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 7:
      </Link>

      <br />

      <span id="subtitle">
        344 total attempts with 231 correct // <i className="fa-solid fa-clock" /> 7 minutes spent solving // <i className="fa-solid fa-user" /> 189 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The title is <q>Gallow's Hill I. Who commanded the forces?</q>
        </li>
        <li>
          This is the name of a{" "}
          <a href="https://whitewolf.fandom.com/wiki/Quest:Gallow%27s_Hill" target="_blank">
            Bloodhunt quest
          </a>
          , which has a riddle about a Swede who sacked Prague
        </li>
        <li>
          The general referenced is <q>Hans Christoph von Königsmarck</q>, and 3 variants of that name are the correct answers: <span className="correct-answer">Hans Christoph von Königsmarck</span>, <span className="correct-answer">Hans Christoff von Königsmarck</span>, and{" "}
          <span className="correct-answer">Hans Christoff Königsmarck</span>
        </li>
      </ul>

      <br />

      {/* STAGE 8 */}
      <Link href="/stages/part8-87dee686-1a6f-413a-8d35-ffc3966af79a" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 8:
      </Link>

      <br />

      <span id="subtitle">
        4,239 total attempts with 381 correct // <i className="fa-solid fa-clock" /> 12 hours, 15 minutes spent solving // <i className="fa-solid fa-user" /> 266 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The title is <q>/stash/znrtsgburmvhgivvgrmkiztfv.png</q>.
        </li>
        <li>
          Using alphabet substitution (Atbash), this becomes{" "}
          <a href="/stash/amightyfinestreetinprague.png" target="_blank">
            /stash/amightyfinestreetinprague.png
          </a>
        </li>
        <li>Going to that image, you can see an image of a street in Bloodhunt's Prague</li>
        <li>
          On this street is a bar named <q>Bétlémská</q>. If you enter this, you get back <q>⬆ wxsaht oonwxscs nhlwhloly</q>
        </li>
        <li>
          If you look up to the document title, it says <q>Fancy a drink?</q>
        </li>
        <li>
          Taking the previous response through a Beaufort cipher with the key <q>yesplease</q> gives you <q>chapel merchant rthirteen</q>
        </li>
        <li>
          The same street also features a chapel called <q>Betlémská kaple</q>. This was founded in Prague in 1391 by Wenceslas Kříž (known as <q>the Merchant</q>)
        </li>
        <li>
          And the correct answer is Wenceslas Kriz or Wenceslas Kříž in ROT13, so <span className="correct-answer">jraprfynf xevm</span> or <span className="correct-answer">jraprfynf xříž</span>
        </li>
      </ul>

      <br />

      {/* STAGE 9 */}
      <Link href="/stages/part9-5576535d-d238-4f17-8f8f-84fa6d2637a6" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 9:
      </Link>

      <br />

      <span id="subtitle">
        1,091 total attempts with 148 correct // <i className="fa-solid fa-clock" /> 5 hours, 20 minutes spent solving // <i className="fa-solid fa-user" /> 147 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>
          The title is <q>Never forget your past.</q> in Czech
        </li>
        <li>Most text on the page appears scrambled</li>
        <li>
          The input placeholder reads <q>nk-BFRT-geiKSEXpyvRRIGqfarfkrOAVLdxjgLGYlam</q>
        </li>
        <li>
          Decrypting this with Beafort (<q>-BFRT-</q> hint is in cipher and needs to be removed) using the key
          <q>youranswer</q> (placeholder was previously <q>Your answer</q>) gives you <q style={{ overflowWrap: "break-word" }}>leonsDASHcatDASHcreatedDASHthisDOTpng</q>
        </li>
        <li>
          You might guess <q>/stash/leons-cat-created-this.png</q>, but this is in a different stash 😉
        </li>
        <li>
          The submit button instead says <q>KFBEPllutt-wffct-qvvjsqfmw</q>
        </li>
        <li>
          Decrypting this with Vigenère using the key <q>submit</q> gives you <q>SLASHstash-omnis-encrypted</q>
        </li>
        <li>
          Combining these, you get{" "}
          <a href="/stash-omnis-encrypted/leons-cat-created-this.png" target="_blank">
            /stash-omnis-encrypted/leons-cat-created-this.png
          </a>
          , which leads you to an image containing Base64 text for another image
        </li>
        <li>
          In the{" "}
          <a href="/stash-external/stgiles.png" target="_blank">
            final image
          </a>
          , it says <q>S:t Giles</q>
          if flipped and rotated (or looked at through a mirror)
        </li>
        <li>This refers to the real church Bloodhunt’s Burning Church is based on</li>
        <li>
          The answer is <q>Burning Church</q>, but in Czech: <span className="correct-answer">Hořící kostel</span>
        </li>
      </ul>

      <br />

      {/* STAGE 10 */}
      <Link href="/stages/part10-0d630934-40e1-4e03-a64d-a8fd05a4bd4d" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 10:
      </Link>

      <br />

      <span id="subtitle">
        3,393 total attempts with 72 correct // <i className="fa-solid fa-clock" /> 19 hours, 20 minutes spent solving // <i className="fa-solid fa-user" /> 177 people made attempts
      </span>

      <ul className="list" id="subtitle">
        <li>The final input stage</li>
        <li>
          The title is{" "}
          <q>
            <u>
              <b>
                <s>F</s>
              </b>
              inal{" "}
              <b>
                <s>H</s>
              </b>
            </u>
            urdle 100BC - mnlygwa gvby hnjm dpah "tjuov"
          </q>
        </li>
        <li>
          <q>100BC</q> is Caesar's birth year, which is the cipher to solve the title
        </li>
        <li>
          If the last part of the title is decoded with a Caesar cipher using a shift of 7 (number of characters underlined), and with an alphabet where F and H are removed, you get <q>decrypt your head with "mango"</q>
        </li>
        <li>"head" refers to the headers of the API response</li>
        <li>
          A header in the check response called <q>omnis-communication</q> will include <q style={{ overflowWrap: "break-word" }}>Key + 19.8.1 === k_vbfrt || glnmtorxpfskzngchzrohagedcwphaidvipkrjm3</q> (19.8.1 = S.H.A)
        </li>
        <li>
          Decoding this using Variant Beaufort (vbfrt) with the key <q>mangoecddcabbfbaebbebfcaabedaa</q> (key from title + stage 0 QR Code SHA minus numbers) gives you <q style={{ overflowWrap: "break-word" }}>slashstashslashclassifieddashaudiodotmp3</q>
        </li>
        <li>
          This leads to{" "}
          <a href="/stash/classified-audio.mp3" target="_blank">
            /stash/classified-audio.mp3
          </a>
          , which includes Morse for:{" "}
          <q>Omnis encountered a video of Vera being burnt to ashes, most likely by an Entity Hunter, before she could advance to the Graveyard. At least these clues did not end up in the hands of the Entity. But the circumstances surrounding Vera's destruction calls for further investigation.</q>
        </li>
        <li>
          This is a quote from a{" "}
          <a href="https://whitewolf.fandom.com/wiki/Quest:Missing_Agent" target="_blank">
            Bloodhunt quest
          </a>
        </li>
        <li>
          If you enter <q>vera</q> or <q>decay</q>, you get <q>gnp.TKFNWYF638/2hsats/</q>
        </li>
        <li>
          If you reverse that, you get an{" "}
          <a href="/stash2/836FYWNFKT.png" target="_blank">
            image of an in-game avatar
          </a>
        </li>
        <li>In this image is also a 13, meaning ROT13</li>
        <li>
          Entering the name of the avatar and god in ROT13, <span className="correct-answer">wnahf</span> (Janus), you will have entered the correct answer
        </li>
        <li>
          You are then given <q>vfgxk://taeuk.uxr/lvalsHMuW2W8uJMC8</q>
        </li>
        <li>
          When this is decoded with Vigenère using the key <q>omnis</q>, a Google Forms link is revealed,{" "}
          <a href="https://forms.gle/ddmzfZUgK2J8mRYQ8" target="_blank">
            https://forms.gle/ddmzfZUgK2J8mRYQ8
          </a>
        </li>
        <li>That’s where the ARG continues and ends</li>
      </ul>

      <br />

      {/* STAGE 11 */}
      <a href="https://forms.gle/ddmzfZUgK2J8mRYQ8" target="_blank" id="titleSmaller" style={{ fontWeight: 300 }}>
        Stage 11:
      </a>

      <br />

      <span id="subtitle">70 submissions received</span>

      <ul className="list" id="subtitle">
        <li>The Google Form included several encrypted questions</li>
        <li>To win, you needed to decrypt the questions, answer them, and send them back encrypted</li>
        <li>
          <b>Question 1:</b> What is the reason as to why Omnis is refered to as they? <span className="correct-answer">Omnis is not only a single individual, but also a collective combined with they/them pronouns</span>
        </li>
        <li>
          <b>Question 2:</b> What is Omnis' favorite type of food? <span className="correct-answer">Rats</span> (accepted variants in substitute: animal blood) (and if with great (other) answers: vitae/blood)
        </li>
        <li>
          <b>Question 3:</b> Upon searching for a missing agent in Prague, Omnis sent you to Rudolfinum. Nearby the clue you could see a poster, what letters are featured on this poster? <span className="correct-answer">Parsifal</span> (variants like Parsital accepted)
        </li>
        <li>
          <b>Question 4:</b> Consider a scenario where a malicious actor has exploited a vulnerability in a web application to gain access to its backend database. They now have access to sensitive user data, including usernames, passwords, and personal information. What are some steps that can be
          taken to mitigate the damage caused by such a breach?{" "}
          <span className="correct-answer">
            While mitigating the damage from such an attack is quite a hassle, it involves temporarily disabling the application (and network), and shutting down the service, to then do a full investigation into how the perpetrators gained access and then resolving the issue. Then, upon going live
            making sure to immediately force all the users for that web application to update their passwords. Additionally, enforcing some kind of 2FA-solution is recommended.
          </span>{" "}
          (There are several more correct answers for this one)
        </li>
      </ul>

      <br />

      <span id="title">Thanks for playing!</span>
    </div>
  );
};
