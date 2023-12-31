const notCorrectResponses = ["Not correct.", "Nope.", "Try again.", "Better luck next time."];

const buildLink = (url: string, text?: string) => `<a class="underline hover:text-bloodhunt-red transition-colors" href="${url}">${text ?? "here"}</a>`;

export const routes: Route[] = [
  {
    stage: 1,
    pathname: "part1-62cc0e08-a230-43e0-a7d2-4d1fd14af939",
    title: "Enter your answer with style",
    correctAnswers: ["vltava river"],
    correctResponse: {
      text: "Task completed.",
      link: "/stages/part2-d40d2703-e230-4786-a366-6f6e2828794b"
    },
    notCorrectResponses
  },
  {
    stage: 2,
    pathname: "part2-d40d2703-e230-4786-a366-6f6e2828794b",
    title: "ISam17.51",
    titleEmote: "fa-solid fa-ankh",
    clues: [
      {
        answer: "shielded by faith",
        response: "Philistine is something else."
      }
    ],
    correctAnswers: ["goliath"],
    correctResponse: {
      text: "Biblical reference master!",
      link: "/stages/part3-9c615232-e6d8-46a1-ad42-c03ae9fc9703"
    },
    notCorrectResponses
  },
  {
    stage: 3,
    pathname: "part3-9c615232-e6d8-46a1-ad42-c03ae9fc9703",
    title: "§1 Omnis Chambers",
    correctAnswers: ["my name is edvin and i have been living in the massive bunker under prague for the last 5 years."],
    correctResponse: {
      text: "I'm impressed.",
      link: "/stages/part4-61be5a2e-b8d0-47bf-8c92-f6b14f9f2ae7"
    },
    notCorrectResponses
  },
  {
    stage: 4,
    pathname: "part4-61be5a2e-b8d0-47bf-8c92-f6b14f9f2ae7",
    title:
      "In sooth, what be I that speak sans mouth,\nand hear sans ears, in ways uncouth?\nOf flesh or form, I have no sight,\nYet wind's sweet kiss brings me to light.\n\nWhat creature am I, one might ask,\nWhose form eludes the mortal task?\nNay, I be none, save for the breeze,\nThat rouses me from my great peace.",
    correctAnswers: ["an echo", "echo"],
    correctResponse: {
      text: "An echo indeed.",
      link: "/stages/part5-8eb95950-e1f2-43b1-86f7-5bdbacfbbaaf"
    },
    notCorrectResponses
  },
  {
    stage: 5,
    pathname: "part5-8eb95950-e1f2-43b1-86f7-5bdbacfbbaaf",
    title: "Sky. Chambers. RF\nSecrecy needed. ROT13 answer wanted.",
    documentTitle: "sTiDOpnADnmSegoHuHhlSacAnHLdSSsAhDDsAraSetHhsytHooSunADaLAHSS",
    correctAnswers: ["abfsrengh (1922)", "abfsrengh zbivr (1922)", "abfsrengh 1922", "abfsrengh zbivr 1922", "abfsrengh - 1922", "1922 abfsrengh", "(1922) abfsrengh", "abfsrengh gur zbivr", "gur zbivr abfsrengh"],
    // "nosferatu (1922)", "nosferatu movie (1922)", "nosferatu 1922", "nosferatu movie 1922", "nosferatu - 1922", "1922 nosferatu", "(1922) nosferatu", "nosferatu the movie", "the movie nosferatu"
    correctResponse: {
      text: "Of course.",
      link: "/stages/part6-cabbe8cf-cb8f-4301-9b97-9f007ac9f326"
    },
    notCorrectResponses
  },
  {
    stage: 6,
    pathname: "part6-cabbe8cf-cb8f-4301-9b97-9f007ac9f326",
    title: "Search. Listen. Report\n🔑 Bring back an encrypted message 🔑",
    correctAnswers: ["vbe ccflt vmk dramyxs"],
    correctResponse: {
      text: "Correct!",
      link: "/stages/part7-07c84e24-8e47-445e-a8f5-aead7bbf3e22"
    },
    notCorrectResponses
  },
  {
    stage: 7,
    pathname: "part7-07c84e24-8e47-445e-a8f5-aead7bbf3e22",
    title: "Gallow's Hill I. Who commanded the forces?",
    correctAnswers: ["hans christoff von königsmarck", "hans christoph von königsmarck", "hans christoff königsmarck"],
    correctResponse: {
      text: "True historian!",
      link: "/stages/part8-87dee686-1a6f-413a-8d35-ffc3966af79a"
    },
    notCorrectResponses: ["Nope.", "Try again.", "Never heard of this person."]
  },
  {
    stage: 8,
    pathname: "part8-87dee686-1a6f-413a-8d35-ffc3966af79a",
    title: "/stash/znrtsgburmvhgivvgrmkiztfv.png",
    correctAnswers: ["jraprfynf xevm", "jraprfynf xříž"],
    // "wenceslas kriz", "wenceslas kříž"
    correctResponse: {
      text: "Obviously...",
      link: "/stages/part9-5576535d-d238-4f17-8f8f-84fa6d2637a6"
    },
    notCorrectResponses
  },
  {
    stage: 9,
    pathname: "part9-5576535d-d238-4f17-8f8f-84fa6d2637a6",
    title: "Nikdy nezapomeň na svou minulost.",
    correctAnswers: ["hořící kostel", "horici kostel"],
    correctResponse: {
      text: "You're on fire!",
      link: "/stages/part10-0d630934-40e1-4e03-a64d-a8fd05a4bd4d"
    },
    notCorrectResponses
  },
  {
    stage: 10,
    pathname: "part10-0d630934-40e1-4e03-a64d-a8fd05a4bd4d",
    title: "<u><b><s>F</s></b>inal <b><s>H</s></b></u>urdle 100BC<br />mnlygwa gvby hnjm dpah 'tjuov'",
    titleIsHtml: true,
    correctAnswers: ["wnahf"],
    // "janus" ROT13
    correctResponse: {
      text: "Tread carefully: vfgxk://taeuk.uxr/lvalsHMuW2W8uJMC8"
    },
    notCorrectResponses
  }
];

export type Route = {
  stage: number;
  pathname: string;
  title: string;
  titleIsHtml?: boolean;
  titleEmote?: string;
  documentTitle?: string;
  clues?: { answer: string; response: string }[];
  correctAnswers: string[];
  correctResponse: {
    text: string;
    link?: string;
  };
  notCorrectResponses: string[];
};
