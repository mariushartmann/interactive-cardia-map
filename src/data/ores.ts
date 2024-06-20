import type { Data } from "./model";

const ores: Data = [
  {
    ids: ["spiritstone"],
    color: "#3cb6bc",
    itemType: "ore",
    locationType: "area",
    data: "560,205 565,255 610,260 640,280 655,303 675,290 688,225 735,225 725,190 695,175 670,175 650,190 610,185",
  },
  {
    ids: ["ruby"],
    color: "#9d1009",
    itemType: "ore",
    locationType: "area",
    data: "550,170 553,190 545,200 520,220 508,228 492,250 488,263 500,275 520,265 525,245 550,210 568,200 568,170 555,165",
  },
  {
    ids: ["obsidian"],
    color: "#292320",
    itemType: "ore",
    locationType: "area",
    data: "525,245 527,278 547,303 605,306 625,326 628,360 610,380 610,390 635,380 655,350 655,330 620,288 545,265 542,245",
  },
  {
    ids: ["dureline"],
    color: "#0ebc65",
    itemType: "ore",
    locationType: "area",
    data: "705,302 670,320 675,350 675,370 660,383 620,400 620,420 685,490 710,476 715,450 690,400 690,370 700,340 710,320",
  },
  {
    ids: ["opal"],
    color: "#ffbc01",
    itemType: "ore",
    locationType: "area",
    data: "535,303 520,333 530,363 520,380 525,385 575,380 590,385 596,390 603,394 608,378 626,358 623,328 605,308",
  },
  {
    ids: ["fairyswing"],
    color: "#508ec1",
    itemType: "ore",
    locationType: "area",
    data: "524,389 520,400 533,417 533,425 510,453 525,475 540,475 582,450 595,445 605,430 600,396 595,395 590,388 575,384",
  },
  {
    ids: ["manastone"],
    color: "#4723ff",
    itemType: "ore",
    locationType: "area",
    data: "680,358 680,370 665,385 625,405 625,420 690,490 715,476 765,466 765,452 735,445 710,420 715,358",
  },
  {
    ids: ["retion"],
    color: "#534938",
    itemType: "ore",
    locationType: "area",
    data: "595,440 590,450 595,477 630,505 670,500 640,460 612,440",
  },
  {
    ids: ["regency"],
    color: "#d68f37",
    itemType: "ore",
    locationType: "area",
    data: "540,490 540,500 553,510 553,542 535,565 538,583 600,580 622,573 635,543 665,533 675,522 670,498 630,500 595,473 570,475",
  },
  {
    ids: ["adamantite"],
    color: "#ff8cb1",
    itemType: "ore",
    locationType: "area",
    data: "480,658 525,660 555,630 570,620 570,590 535,585 530,540 510,540 510,600 480,640",
  },
  {
    ids: ["argentum"],
    color: "#fbfcc0",
    itemType: "ore",
    locationType: "area",
    data: "595,647 620,630 625,570 610,560 545,560 535,570 535,580 590,590 595,595 585,635",
  },
  {
    ids: ["moonlightstone"],
    color: "#f69649",
    itemType: "ore",
    locationType: "area",
    data: "705,354 707,398 735,408 830,408 840,400 840,360 850,355 857,360 860,380 880,390 890,360 890,315 870,300 830,295 790,350",
  },
  {
    ids: ["crystalwing", "runecarore", "duckharukon", "thunderboltstone"],
    color: "#ffffff",
    itemType: "ore",
    locationType: "area",
    data: "765,348 755,358 757,402 765,412 830,412 845,400 890,350 950,355 1000,355 1110,330 1130,290 1140,250 1130,200 1100,180 1000,180 975,190 955,225 935,225 905,190 885,190 865,200 860,210 870,230 900,240 920,240 925,260 910,300 870,300 828,290 786,346",
  },
  {
    ids: ["mithril"],
    color: "#3dff7c",
    itemType: "ore",
    locationType: "area",
    data: "925,490 905,520 915,550 935,610 980,660 1000,670 1010,660 1000,650 990,646 955,620 945,600 935,550 934,530 985,505 975,490",
  },
  {
    ids: ["lifestone"],
    color: "#fe2a41",
    itemType: "ore",
    locationType: "area",
    data: "790,560 810,580 860,600 875,650 915,700 915,750 900,765 910,770 925,770 935,735 935,685 885,605 835,575 815,565 807,560 ",
  },
  {
    ids: ["aquamarine"],
    color: "#247394",
    itemType: "ore",
    locationType: "area",
    data: "710,570 710,610 685,690 685,705 720,720 720,715 705,690 705,660 725,640 745,640 760,660 760,690 740,710 720,720 790,760 900,750 910,730 835,600 785,590 765,570 ",
  },
  {
    ids: ["hearthstone", "pearl"],
    color: "#cc14cc",
    itemType: "ore",
    locationType: "area",
    data: "1055,500 1020,500 980,530 965,530 960,545 980,575 1055,580 1050,600 990,600 970,590 965,610 985,630 1030,640 1050,600 1055,580 ",
  },
  {
    ids: ["sapphire"],
    color: "#0841c6",
    itemType: "ore",
    locationType: "area",
    data: "",
  },
  {
    ids: ["crusium", "copper", "iron", "emeralnd"],
    color: "#7e4405",
    itemType: "ore",
    locationType: "area",
    data: null,
  },
];

ores.sort((a, b) => (a.ids > b.ids ? 1 : -1));

export { ores };
