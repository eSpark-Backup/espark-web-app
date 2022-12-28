const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const team = [
  {
    username: "syedhasni",
    email: "syedhasni@esparkconsultants.com",
    fullname: "Syed Ali Naqi Hasni",
  },
  {
    username: "abbas",
    email: "abbas@esparkconsultants.com",
    fullname: "KalbeAbbas",
  },
  {
    username: "fariha",
    email: "fariha@esparkconsultants.com",
    fullname: "Fariha Rehman",
  },
  {
    username: "arsalan",
    email: "arsalan@esparkconsultants.com",
    fullname: "Mars",
  },
  {
    username: "sami",
    email: "sami@esparkconsultants.com",
    fullname: "Sami Uddin",
  },
  {
    username: "sarim",
    email: "sarim@esparkconsultants.com",
    fullname: "Muhammad Sarim",
  },
  {
    username: "faraz",
    email: "faraz@esparkconsultants.com",
    fullname: "Faraz Uddin",
  },
  {
    username: "sales",
    email: "sales@esparkconsultants.com",
    fullname: "sales",
  },
  {
    username: "urooj",
    email: "urooj@esparkconsultants.com",
    fullname: "Urooj Naveed",
  },
  {
    username: "wirad",
    email: "wirad@esparkconsultants.com",
    fullname: "Muhammad Wirad Ali",
  },
  {
    username: "info",
    email: "info@esparkconsultants.com",
    fullname: "info",
  },
  {
    username: "bilal",
    email: "bilal@esparkconsultants.com",
    fullname: "Bilal Ahmed Khan",
  },
  {
    username: "irfan",
    email: "irfan@esparkconsultants.com",
    fullname: "irfan",
  },
  {
    username: "osama",
    email: "osama@esparkconsultants.com",
    fullname: "Muhammad Osama",
  },
  {
    username: "sidra",
    email: "sidra@esparkconsultants.com",
    fullname: "Sidra",
  },
  {
    username: "shoaib",
    email: "shoaib@esparkconsultants.com",
    fullname: "shoaib",
  },
  {
    username: "waqar",
    email: "waqar@esparkconsultants.com",
    fullname: "Muhammad Waqar",
  },
  {
    username: "sohaib",
    email: "sohaib@esparkconsultants.com",
    fullname: "Syed Muhammad Sohaib Hussain",
  },
  {
    username: "bari",
    email: "bari@esparkconsultants.com",
    fullname: "Fazle Karim Bari",
  },
  {
    username: "spiderman",
    email: "spiderman@esparkconsultants.com",
    fullname: "Spiderman",
  },
  {
    username: "apple",
    email: "apple@esparkconsultants.com",
    fullname: "Apple",
  },
  {
    username: "electronali",
    email: "electronali@esparkconsultants.com",
    fullname: "Electron Ali",
  },
  {
    username: "nuzhat",
    email: "nuzhat@esparkconsultants.com",
    fullname: "Nuzhat Electron",
  },
  {
    username: "hassan",
    email: "hassan@esparkconsultants.com",
    fullname: "Hassaan Ahmed",
  },
  {
    username: "shoaibuddin12fx",
    email: "shoaibuddin12fx@gmail.com",
    fullname: "shoaib uddin",
  },
  {
    username: "iftikhar",
    email: "iftikhar@esparkconsultants.com",
    fullname: "Iftikhar Ahmed",
  },
  {
    username: "faizan",
    email: "faizan@esparkconsultants.com",
    fullname: "Faizan Ur Rahman",
  },
  {
    username: "rohail",
    email: "rohail@esparkconsultants.com",
    fullname: "Muhammad Rohail Zafar",
  },
  {
    username: "ali",
    email: "ali@esparkconsultants.com",
    fullname: "Muhammad Ali Mukhtar",
  },
  {
    username: "areeba",
    email: "Areeba@esparkconsultants.com",
    fullname: "Areeba Shakeel",
  },
  {
    username: "sohaibahmed",
    email: "sohaibahmed@esparkconsultants.com",
    fullname: "Sohaib Ahmed",
  },
  {
    username: "iqra",
    email: "iqra@esparkconsultants.com",
    fullname: "Iqra Mukhtar",
  },
  {
    username: "saad",
    email: "saad@esparkconsultants.com",
    fullname: "Saad Zafar",
  },
  {
    username: "hr",
    email: "hr@esparkconsultants.com",
    fullname: "Shazia Hameed",
  },
  {
    username: "iqraashfaq",
    email: "iqraashfaq@esparkconsultants.com",
    fullname: "Iqra Ashfaq",
  },
  {
    username: "muzamil",
    email: "muzamil@esparkconsultants.com",
    fullname: "Muzamil Ali",
  },
  {
    username: "hassankhan",
    email: "hassankhan@esparkconsultants.com",
    fullname: "Hassan Ahmed Khan",
  },
  {
    username: "kamran",
    email: "kamran@esparkconsultants.com",
    fullname: "Kamran Asif",
  },
  {
    username: "ahmedraza",
    email: "ahmedraza@esparkconsultants.com",
    fullname: "Ahmed Raza",
  },
  {
    username: "shahdurran",
    email: "shahdurran@esparkconsultants.com",
    fullname: "Shah Durran",
  },
  {
    username: "rabiya",
    email: "rabiya@esparkconsultants.com",
    fullname: "Rabiya Amin",
  },
  {
    username: "fayyaz",
    email: "fayyaz@esparkconsultants.com",
    fullname: "Muhammad Fayyaz",
  },
  {
    username: "shahzaib",
    email: "shahzaib@esparkconsultants.com",
    fullname: "Raja Shahzaib",
  },
  {
    username: "kamil",
    email: "kamil@esparkconsultants.com",
    fullname: "Mohammad Kamil",
  },
  {
    username: "harissikandar",
    email: "harissikandar@esparkconsultants.com",
    fullname: "Haris Sikander",
  },
  {
    username: "ahsanebrahimkhatri",
    email: "ahsankhatri@esparkconsultants.com",
    fullname: "Ahsan Ebrahim Khatri",
  },
  {
    username: "mahrukh.shakeel07",
    email: "mahrukh.shakeel07@gmail.com",
    fullname: "Mahrukh Shakeel",
  },
  {
    username: "jamshed",
    email: "Jamshed@esparkconsultants.com",
    fullname: "Jamshed Ahmed",
  },
  {
    username: "abideen",
    email: "abideen@esparkconsultants.com",
    fullname: "Muhammad Abideen",
  },
  {
    username: "fahim",
    email: "fahim@esparkconsultants.com",
    fullname: "Fahim Uddin",
  },
  {
    username: "hunainiqbal",
    email: "hunainIqbal@esparkconsultants.com",
    fullname: "Hunain Iqbal",
  },
  {
    username: "abeer",
    email: "abeer@esparkconsultants.com",
    fullname: "Abeer ul haq",
  },
  {
    username: "marsvirgo",
    email: "marsvirgo@esparkconsultants.com",
    fullname: "Mars",
  },
  {
    username: "ahmedshafi",
    email: "AhmedShafi@esparkconsultants.com",
    fullname: "Ahmed Shafi",
  },
  {
    username: "eshairb",
    email: "Eshairb@esparkconsultants.com",
    fullname: "Esharib Musawer",
  },
  {
    username: "ehsansiddiqui",
    email: "ehsansiddiqui@esparkconsultants.com",
    fullname: "Ehsan Siddiqui",
  },
  {
    username: "m.ovais",
    email: "m.ovais@esparkconsultants.com",
    fullname: "Muhammad Ovais",
  },
  {
    username: "ayesharahim",
    email: "ayesharahim@esparkconsultants.com",
    fullname: "Ayesha Rahim",
  },
  {
    username: "hafizshahrukh",
    email: "hafizshahrukh@esparkconsultants.com",
    fullname: "Hafiz Shahrukh",
  },
  {
    username: "dilawarjaleel",
    email: "DilawarJaleel@eSparkconsultants.com",
    fullname: "dilawarjaleel",
  },
  {
    username: "ambreenazeem",
    email: "ambreenazeem@esparkconsultants.com",
    fullname: "Ambreen Azeem",
  },
  {
    username: "muhammadosamaafaque",
    email: "muhammadosamaafaque@esparkconsultants.com",
    fullname: "Muhammad Osama Afaque",
  },
  {
    username: "hunaingul",
    email: "HunainGul@esparkconsultants.com",
    fullname: "Hunain Gul",
  },
  {
    username: "googledrive",
    email: "botuser-T030AKS5N2W-B03M5N6DNL8@slack-bots.com",
    fullname: "Google Drive",
  },
  {
    username: "dilawarjalil",
    email: "DilawarJalil@esparkconsultants.com",
    fullname: "Dilawar Jalil",
  },
  {
    username: "usamahamd",
    email: "usamahamd@esparkconsultants.com",
    fullname: "usamahamd",
  },
  {
    username: "imranahmed",
    email: "imranahmed@esparkconsultants.com",
    fullname: "Imran Ahmed",
  },
  {
    username: "usamahamid",
    email: "usamahamid@esparkconsultants.com",
    fullname: "Muhammad Usama Hamid",
  },
  {
    username: "absar",
    email: "Absar@esparkcosultants.com",
    fullname: "absar",
  },
  {
    username: "abdulhai",
    email: "abdulhai@esparkconsultants.com",
    fullname: "Abdul Hai",
  },
  {
    username: "zain",
    email: "zain@esparkconsultants.com",
    fullname: "Zain",
  },
  {
    username: "nazirhussain",
    email: "nazirhussain@esparkconsultants.com",
    fullname: "Syed Nazir Hussain",
  },
  {
    username: "jirabot",
    email: "botuser-T030AKS5N2W-B03PAP8GKQA@slack-bots.com",
    fullname: "Jira",
  },
  {
    username: "rizwan",
    email: "rizwan@esparkconsultants.com",
    fullname: "rizwan",
  },
  {
    username: "abdulbasit",
    email: "AbdulBasit@esparkconsultants.com",
    fullname: "Basit Ali Khan",
  },
  {
    username: "rizwankarim",
    email: "Rizwankarim@esparkconsultants.com",
    fullname: "Rizwan Karim",
  },
  {
    username: "absar918",
    email: "absar@esparkconsultants.com",
    fullname: "M. Absar R.K",
  },
  {
    username: "farrukhalvi",
    email: "Farrukhalvi@esparkconsultants.com",
    fullname: "Farrukh Alvi",
  },
  {
    username: "samreenrashid",
    email: "samreenrashid@esparkconsultants.com",
    fullname: "Samreen Rashid",
  },
  {
    username: "zeeshan",
    email: "zeeshan@esparkconsultants.com",
    fullname: "Muhammad Zeeshan Rasheed",
  },
  {
    username: "mraza",
    email: "mraza@esparkconsultants.com",
    fullname: "Mudassir Raza",
  },
  {
    username: "harem-masroor",
    email: "harem-masroor@esparkconsultants.com",
    fullname: "Harem Masroor Syed",
  },
  {
    username: "asraali",
    email: "asraali@esparkconsultants.com",
    fullname: "Asra Ali",
  },
  {
    username: "farhankhalid",
    email: "farhankhalid@esparkconsultants.com",
    fullname: "Farhan Khalid",
  },
  {
    username: "ahsanmoten",
    email: "ahsanmoten@esparkconsultants.com",
    fullname: "Ahsan Moten",
  },
  {
    username: "kashif",
    email: "kashif@esparkconsultants.com",
    fullname: "Shaikh Kashif",
  },
  {
    username: "kashaf.zahra",
    email: "Kashaf.zahra@esparkconsultants.com",
    fullname: "Kashaf Zehra",
  },
  {
    username: "suha.rehman",
    email: "Suha.rehman@esparkconsultants.com",
    fullname: "Suha Rehman",
  },
  {
    username: "farazjamal",
    email: "farazjamal@esparkconsultants.com",
    fullname: "Faraz Jamal",
  },
  {
    username: "hareemsidiqqui",
    email: "hareemsidiqqui@esparkconsultants.com",
    fullname: "hareem siddiqui",
  },
  {
    username: "hareemsiddiqui",
    email: "hareemsiddiqui@esparkconsultants.com",
    fullname: "hareemsiddiqui",
  },
  {
    username: "saif",
    email: "saif@esparkconsultants.com",
    fullname: "Saif ur rehman",
  },
  {
    username: "affansaied",
    email: "affansaied@esparkconsultants.com",
    fullname: "AffanSaied",
  },
  {
    username: "rumaisa",
    email: "rumaisa@espakconsultants.com",
    fullname: "rumaisa",
  },
  {
    username: "rumaisa258",
    email: "rumaisa@esparkconsultants.com",
    fullname: "Rumaisa Shahab",
  },
  {
    username: "hasansharif",
    email: "hasansharif@esparkconsultants.com",
    fullname: "Muhammad Hassan Sharif",
  },
  {
    username: "ahmednaseem",
    email: "ahmednaseem@esparkconsultants.com",
    fullname: "Ahmed Naseem",
  },
  {
    username: "salmanali",
    email: "salmanali@esparkconsultants.com",
    fullname: "Salman Ali",
  },
  {
    username: "hinasheikh",
    email: "hinasheikh@esparkconsultants.com",
    fullname: "Hina Sheikh",
  },
  {
    username: "sadafkhan",
    email: "sadafkhan@esparkconsultants.com",
    fullname: "Sadaf Khan",
  },
  {
    username: "muhammadali",
    email: "muhammadali@esparkconsultants.com",
    fullname: "Muhammad Ali",
  },
  {
    username: "ammad",
    email: "ammad@esparkconsultants.com",
    fullname: "Ammad Anwar",
  },
  {
    username: "waqaryounus",
    email: "waqaryounus@esparkconsultants.com",
    fullname: "Muhammad Waqar Younus",
  },
  {
    username: "dania",
    email: "dania@esparkconsultants.com",
    fullname: "Dania Khan",
  },
  {
    username: "shahmeer",
    email: "shahmeer@esparkconsultants.com",
    fullname: "Shah Meer Hashim Raza",
  },
  {
    username: "moin",
    email: "moin@esparkconsultants.com",
    fullname: "Moin Khan",
  },
  {
    username: "ambreen",
    email: "ambreen@esparkconsultants.com",
    fullname: "Ambreen Azeem",
  },
  {
    username: "shahzad",
    email: "shahzad@esparkconsultants.com",
    fullname: "Shahzad Alam",
  },
  {
    username: "finance",
    email: "finance@esparkconsultants.com",
    fullname: "Spiderman",
  },
  {
    username: "abdullah",
    email: "abdullah@esparkconsultants.com",
    fullname: "Muhammad Abdullah",
  },
  {
    username: "kamranahmed",
    email: "kamranahmed@esparkconsultants.com",
    fullname: "Kamran Ahmed",
  },
  {
    username: "shahab",
    email: "shahab@esparkconsultants.com",
    fullname: "Muhammad Shahab Rajput",
  },
  {
    username: "rehan",
    email: "rehan@esparkconsultants.com",
    fullname: "Rehan Tabassum",
  },
  {
    username: "raveed",
    email: "raveed@esparkconsultants.com",
    fullname: "Raveed Gill",
  },
  {
    username: "radeel",
    email: "radeel@esparkconsultants.com",
    fullname: "Radeel Gill",
  },
  {
    username: "raveedg",
    email: "raveedg@comodo.net",
    fullname: "Raveed Gill",
  },
  {
    username: "alizain",
    email: "alizain@esparkconsultants.com",
    fullname: "Ali Zain",
  },
  {
    username: "hameed",
    email: "hameed@esparkconsultants.com",
    fullname: "Hameed Ur Rehman",
  },
];
