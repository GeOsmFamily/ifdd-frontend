import { Component } from '@angular/core';
import { StorageService } from 'src/app/core/storage/storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent {
  language: string | null = 'fr';

   sections:any[] = [
     {
       image: '/assets/images/about2.jpg',
       title: {
        en: "The Mapping project",
        fr: "Le projet de cartographie"
      },
      content: {
        en: `The United Nations 2030 Agenda for Sustainable Development (Agenda 2030) and its 17 Sustainable Development Goals (SDGs) highlight key issues that require urgent action at all levels and by all stakeholders. More information: <a target="_blank" style="text-decoration: underline; text-align: center; color:blue" href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/">click here</a><br><br>
One of the challenges of implementation is to mobilise the full range of stakeholders, to bring the ambition of the SDGs to the heart of the people and to make them tangible enough to encourage all stakeholders to contribute. Civil society plays a critical role here. <br><br>
But while civil society organisations (CSOs) are already heavily involved in implementing the SDGs, existing platforms need strategic support to foster collaboration and become multi-stakeholder platforms. To this end, a pilot mapping project of civil society organisations (CSOs) contributing to the implementation of the SDGs has been implemented in 2021 in two West African countries, Benin and Togo, within the framework of the Global Forum for National SDG Advisory Bodies, in partnership with the German Council for Sustainable Development (RNE - Rat für Nachaltige Entwicklung), Maison de la Société Civile (MdSC) in Benin and the Groupe de Travail des Organisations de la Société Civile sur les ODD (GT-OSC-ODD) in Togo. In 2023, the project has been extended to 4 new countries: Cameroon, Côte d’Ivoire, Senegal, Tanzania, in co-cooperation with the following organization : Conseil des Organisations Non-Gouvernementales d’Appui au Développement (CONGAD) in Senegal, Forêts et Développement Rural (FODER) in Cameroon, Initiative de la Société Civile pour les Objectifs de Développement Durable en Côte d’Ivoire (ISC/ODD-CI) in Côte d’Ivoire and UNA Tanzania in Tanzania. <br><br>
The main objective here is to foster networking and improve the visibility of existing organisational efforts to implement the SDGs, by compiling a verified inventory of all relevant civil society organisations. Although some organisations are already connected, there is no comprehensive and verified overview of all CSOs engaged in implementing the SDGs. This mapping of organisations will strengthen institutional actions and local networks in favour of sustainable development. This increased visibility will also make it possible to highlight the links between the actors involved in the SDGs and to develop innovative partnerships for better coordination and knowledge sharing.
`,
        fr: `Le programme de développement durable à l’horizon 2030 des Nations Unies (Agenda 2030) et ses 17 objectifs de développement durable (ODD) mettent en exergue des enjeux clefs qui appellent une action urgente à tous les niveaux et par toutes les parties prenantes. Plus d’informations : <a target="_blank" style="text-decoration: underline; text-align: center; color:blue" href="https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/">cliquez ici</a><br><br>
L’un des enjeux de sa mise en œuvre est notamment de mobiliser les acteurs dans toute leur diversité, de porter l’ambition des ODD au cœur des populations et de les rendre assez tangibles pour inciter toutes les parties prenantes à y contribuer. La société civile joue ici un rôle critique. <br><br>
Mais si les organisations de la société civile (OSC) sont déjà très engagées dans la mise en œuvre des ODD, les plateformes existantes ont besoin d’un soutien stratégique pour favoriser la collaboration et devenir des plateformes multipartites. <br><br>
A cet effet, un projet pilote de cartographie des organisations de la société civile (OSC) contribuant à la mise en œuvre des ODD a été mis en œuvre en 2021 dans deux pays d’Afrique de l’Ouest, le Bénin et le Togo, dans le cadre du Forum Mondial des organes consultatifs nationaux sur les ODD, en partenariat avec le Conseil allemand pour le développement durable (RNE - Rat für Nachaltige Entwicklung), la Maison de la Société Civile (MdSC) au Bénin et le Groupe de Travail des Organisation de la Société Civile sur les ODD (GT-OSC-ODD) au Togo. En 2023, le projet a été étendu à 4 nouveaux pays : Cameroun, Côte d’Ivoire, Sénégal, Tanzanie, en coopération avec les organisations suivantes : Conseil des Organisations Non-Gouvernementales d’Appui au Développement (CONGAD) au Sénégal, Forêts et Développement Rural (FODER) au Cameroun, Initiative de la Société Civile pour les Objectifs de Développement Durable en Côte d’Ivoire (ISC/ODD-CI) et UNA Tanzania en Tanzanie. <br><br>
L’objectif principal est ici de favoriser la mise en réseau et d’améliorer la visibilité des efforts organisationnels existants pour mettre en œuvre les ODD, en dressant un inventaire vérifié de toutes les organisations de la société civile concernées au Bénin et au Togo. Bien que certaines organisations soient déjà connectées, il n’existe pas de vue d’ensemble exhaustive et vérifiée de toutes les OSC engagées dans la mise en œuvre des ODD. Cette cartographie des organisations renforcera les actions institutionnelles et les réseaux locaux en faveur du développement durable. Cette visibilité accrue permettra également de mettre en évidence les liens entre les acteurs des ODD et de développer ainsi des partenariats innovants pour une meilleure coordination et un meilleur partage de connaissances.
`
       },
    },
     {
       image: '',
      title: {
        en: "Download the snapshot publication",
        fr: "Téléchargez la publication du snapshot"
      },
      content: {
        en: `Snapshot of a Global Forum project in Bénin and Togo on SDG stakeholder mapping, round table dialogues and digital visibility for accelerated SDG delivery <br><br>
This snapshot highlights the project’s results, thereby presenting its methodological concept. The implementing Global Forum working group focussed on improving the visibility and network character of existing actions for the implementation of the SDGs in Benin and Togo. They chose an approach that emphasized the potential of SDG stakeholder mapping, local round table dialogues, and digital visibility to accelerate SDG implementation at local level. The main outcome of the project is a digital map to make visible and thereby strengthen the engagement of relevant civil society organizations in the implementation of the SDGs. <br><br>
<a target="_blank" style="text-decoration: underline; text-align: center; color:blue" href="https://sdgglobalforum.org/fileadmin/user_upload/Projects/220705_Global_Forum_Projekte_EN.pdf">DOWNLOAD</a><br><br>
`,
        fr: `Aperçu d’un projet du Forum Mondial, 2022: Renforcement de la mise en réseau et de la visibilité des efforts organisationnels existants pour mettre en œuvre les ODD
Le groupe de travail du Forum Mondial chargé de la mise en œuvre s’est concentré sur l’amélioration de la visibilité et la mise en réseau des actions existantes pour mettre en œuvre des ODD au Bénin et au Togo. Ils ont choisi une approche qui mis en exergue le potentiel de la cartographie des acteurs des ODD, des espaces de dialogues au sein de tables rondes locales et de la visibilité numérique pour accélérer la réalisation des ODD. Le résultat principal du projet est une cartographie numérique qui vise à rendre visible, et donc à renforcer l’engagement des organisations de la société civile (OSC) impliquées dans la mise en œuvre des ODD. ( Juillet 2022)
<a target="_blank" style="text-decoration: underline; text-align: center; color:blue" href="https://sdgglobalforum.org/fileadmin/user_upload/Projects/220705_Global_Forum_Projekte_EN.pdf">TELECHARGER</a><br><br>
`
       },
    },
     {
       image: '',
      title: {
        en: "Civil Society Organizations Working Group on the SDGs, Togo",
        fr: "Groupe de Travail des Organisations de la Société Civile sur les ODD, Togo"
      },
      content: {
        en: `The civil society working group "Groupe de travail des organisations de la société civile sur les objectifs de développement durable" is made up of more than 500 civil society organisations in Togo.  The working group works on the implementation of the SDGs in Togo.`,
        fr: `Le "Groupe de travail des organisations de la société civile sur les objectifs de développement durable" est composé de plus de 500 organisations de la société civile au Togo.  Il travaille sur la mise en œuvre des ODD au Togo.`
      }
    },
     {
       image: '',
      title: {
        en: "Civil Society House, Benin",
        fr: "Maison de la Société Civile, Bénin"
      },
      content: {
        en: `The Maison de la Société Civile (MdSC) is an organisation set up in Benin with the main aim of contributing to the eﬀective involvement of Civil Society Organisations (CSOs) in the process of defining, implementing, monitoring and evaluating development programmes and policies. <br><br>
Officially created in 2008, it is apolitical, non-profit and aims to be an inclusive space for capacity building and promotion at the service of all CSOs in Benin and their partners. Its mission is to strengthen the capacities of CSOs in order to increase their effectiveness as development actors. Its aim is to contribute to the creation of a society in which civil society organisations (CSOs) are more involved in the processes of defining, implementing, monitoring and evaluating development programmes and policies. <br><br>
Since 2009, it has developed expertise and tools for strengthening and supporting civil society organisations (CSOs) in strategic planning, monitoring and evaluation, project development, resource mobilisation, organising the life of associations, accounting, financial and tax management of organisations, human resources management, advocacy, negotiation, capitalisation, accountability, communication, and so on. From 2017 to 2020, with the support of the German Development Cooperation, she coordinated the process of producing alternative reports on the implementation of the 2030 Agenda in Benin. In 2018, it supported the establishment of eight (8) thematic pools structured around the SDGs.
`,
        fr: `La Maison de la Société Civile (MdSC) est une organisation créée au Bénin avec pour objectif principal de contribuer à l'implication efficace des Organisations de la Société Civile (OSC) dans le processus de définition, de mise en œuvre, de suivi et d'évaluation des programmes et politiques de développement. <br><br>
Officiellement créée en 2008, elle est apolitique, à but non lucratif et se veut être un espace inclusif de renforcement des capacités et de promotion au service de toutes les OSC du Bénin et de leurs partenaires. Sa mission est de renforcer les capacités des OSC afin d'accroître leur efficacité en tant qu'acteurs du développement. Son objectif est de contribuer à la création d'une société dans laquelle les organisations de la société civile (OSC) sont davantage impliquées dans les processus de définition, de mise en œuvre, de suivi et d'évaluation des programmes et politiques de développement. <br><br>
Depuis 2009, elle a développé une expertise et des outils de renforcement et d'accompagnement des organisations de la société civile (OSC) dans la planification stratégique, le suivi et l'évaluation, le développement de projets, la mobilisation des ressources, l'organisation de la vie associative, la comptabilité, la gestion financière et fiscale des organisations, les ressources humaines. gestion, plaidoyer, négociation, capitalisation, responsabilisation, communication, etc. De 2017 à 2020, avec le soutien de la Coopération allemande au développement, elle a coordonné le processus de production de rapports alternatifs sur la mise en œuvre de l’Agenda 2030 au Bénin. En 2018, il a soutenu la mise en place de huit (8) pools thématiques structurés autour des ODD.
`
      }
    },
     {
       image: '/assets/images/a20.png',
      title: {
        en: "Council of Non-Governmental Development Organizations, Senegal",
        fr: "Conseil des Organisations Non-Gouvernementales d’Appui au Développement, Sénégal"
      },
      content: {
        en: `CONGAD was founded in 1982 by non-governmental organisations working in Senegal to coordinate the management of relations with the State and other partners. CONGAD provides capacity building for CSOs, local authorities and the media. It is also involved in coordinating development, lobbying and advocacy activities to create a strong civil society that can influence public policies.`,
        fr: `CONGAD a été fondé en 1982 par des organisations non gouvernementales travaillant au Sénégal pour coordonner la gestion des relations avec l'État et d'autres partenaires. Le CONGAD assure le renforcement des capacités des OSC, des autorités locales et des médias. Il est également impliqué dans la coordination des activités de développement, de lobbying et de plaidoyer afin de créer une société civile forte capable d'influencer les politiques publiques.`
      }
    },
     {
       image: '/assets/images/a21.jpg',
      title: {
        en: "Forestry and Rural Development, Cameroon",
        fr: "Forêts et Développement Rural, Cameroun"
      },
      content: {
        en: `Forêts et Développement Rural (FODER) is a non-profit environmental association with an international vocation created in Cameroon under Declaration n°76/J10/BAPP of 02 December 2002. <br><br>
The organisation works for the advent of a fairer society, without marginalisation or discrimination, using its natural resources to promote sustainable development. <br><br>
Its mission is to create a framework conducive to sustainable development through actions aimed at guaranteeing justice and equity, rights and democracy, transparent, participatory and sustainable management of natural resources, preservation of biological diversity and improving the quality of life and the environment. <br><br>
The association's objectives are to <br>
Contribute to the protection of the environment and the sustainable management of natural resources, <br>
Fight against all forms of marginalisation and discrimination related to the management of natural resources, <br>
Contribute to improving the living conditions of the population, <br>
Contribute to the improvement of policies and laws relating to our areas of intervention, <br>
Strengthen the capacities of the association and those of partner organisations, <br>
Develop partnerships and raise funds to carry out its mission. <br>
`,
        fr: `Forêts et Développement Rural (FODER) est une association écologiste à but non lucratif et à vocation internationale créée au Cameroun, sous la Déclaration n°76/J10/BAPP du 02 Décembre 2002. <br><br>
L’organisation œuvre pour l’avènement d’une société plus juste, sans marginalisation ni discrimination, mettant ses ressources naturelles au service du développement durable. <br><br>
Sa mission consiste à créer un cadre propice au développement durable à travers des actions visant à garantir la justice et l’équité, les droits et la démocratie, la gestion transparente, participative et durable des ressources naturelles, la préservation de la diversité biologique et l’amélioration de la qualité de la vie et de l’environnement. <br><br>
L’association a pour objectifs de : <br><br>
Contribuer à la protection de l’environnement et à la gestion durable des ressources naturelles, <br>
Lutter contre toute forme de marginalisation et de discrimination en rapport avec la gestion des ressources naturelles, <br>
Contribuer à l’amélioration des conditions de vie des populations, <br>
Contribuer à l’amélioration des politiques et des lois relatives à nos domaines d’intervention, <br>
Renforcer les capacités de l’association et celles des organisations partenaires, <br>
Développer des partenariats et mobiliser des fonds pour la réalisation de sa mission. <br>
`
      }
    },
     {
       image: '/assets/images/a22.png',
      title: {
        en: "Civil Society Initiative for Sustainable Development Goals in Côte d'Ivoire",
        fr: "Initiative de la Société Civile pour les Objectifs de Développement Durable en Côte d’Ivoire"
      },
      content: {
        en: `ISC/ODD-CI is an umbrella organisation created in 2017 whose mission is to co-ordinate the initiatives of member organisations to promote, implement and monitor and evaluate the SDGs. It includes federations, platforms associations as well as other bodies such as observers from technical ministries, the private sector, international organisations, the United Nations system and development partners, who do not have voting rights. <br><br>
This initiative arose from the active participation of three umbrella organisations: CSCI, CNOSCI and GOFEHF, in Côte d'Ivoire's preparations for the United Nations Summit for the Adoption of the 2030 Agenda (SDGs) in September 2015. It seeks to develop an internal dialogue framework for civil society organisations (CSOs)  to better co-ordinate actions, have operational CSO contacts to monitor the SDGs, identify and list all CSO results in relation to the SDGs, Agenda 2030 and the National Development Plan (NDP), as well as carry out concrete actions on the ground alongside the government and share best practices in Côte d'Ivoire.
`,
        fr: `L'ISC/ODD-CI est une organisation faîtière créée en 2017 dont la mission est de coordonner les initiatives des organisations membres pour promouvoir, mettre en œuvre et suivre et évaluer les ODD. Elle comprend des fédérations, des plateformes, des associations ainsi que d'autres organismes tels que des observateurs des ministères techniques, du secteur privé, des organisations internationales, du système des Nations unies et des partenaires de développement, qui n'ont pas de droit de vote. <br><br>
Cette initiative est née de la participation active de trois organisations faîtières : CSCI, CNOSCI et GOFEHF, à la préparation par la Côte d'Ivoire du Sommet des Nations unies pour l'adoption de l'Agenda 2030 (ODD) en septembre 2015. Elle vise à développer un cadre de dialogue interne pour les organisations de la société civile (OSC) afin de mieux coordonner les actions, d'avoir des contacts opérationnels au sein des OSC pour le suivi des ODD, d'identifier et de répertorier tous les résultats des OSC en lien avec les ODD, l'Agenda 2030 et le Plan national de développement (PND), ainsi que de mener des actions concrètes sur le terrain aux côtés du gouvernement et de partager les bonnes pratiques en Côte d'Ivoire.
`
      }
    },
     {
       image: '/assets/images/a23.png',
      title: {
        en: "UNA Tanzania",
        fr: "UNA Tanzania"
      },
      content: {
        en: `The United Nations Association of Tanzania is one of the oldest Civil Society Organizations in the country registered in 1964. It’s office is located in Mikocheni street, Mikocheni B, Dar-es-Salaam, Tanzania. The organization is entirely devoted to supporting the purposes and principles of the United Nations Charter, promoting public awareness and understanding of the activities of United Nations and its agencies. Moreover, it strives for the recognition of respect for human rights and fundamental freedoms throughout the Tanzania and the World.<br><br>
It's mission is to Mobilize for action, promote inclusiveness, enhance accountability and to ensure that no one is left behind in the implementation and achievement of SDGs in Tanzania. <br><br>
A just Tanzania society where no one is left behind.
`,
        fr: `United Nations Association of Tanzania (UNA Tanzania) est l'une des plus anciennes organisations de la société civile du pays, enregistrée en 1964. Ses bureaux sont situés dans la rue Mikocheni, Mikocheni B, Dar-es-Salaam, Tanzanie. L'organisation se consacre entièrement au soutien des objectifs et des principes de la Charte des Nations Unies, à la sensibilisation du public et à la compréhension des activités des Nations Unies et de ses agences. En outre, elle s'efforce de faire reconnaître le respect des droits de l'homme et des libertés fondamentales en Tanzanie et dans le monde entier. <br><br>
Sa mission est de mobiliser pour l'action, de promouvoir l'inclusion, de renforcer la responsabilité et de veiller à ce que personne ne soit laissé pour compte dans la mise en œuvre et la réalisation des ODD en Tanzanie. <br><br>
Une société tanzanienne juste où personne n'est laissé pour compte.
`
      }
    }
  ];


  constructor(private storage: StorageService) { }

  ngOnInit(): void {
      
      this.language = this.storage.getItem('language');
      console.log(this.language)
    }
}
