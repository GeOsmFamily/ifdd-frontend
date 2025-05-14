import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from 'src/app/core/storage/storage.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
})
export class PartnersComponent {
  partners: any[] = [
    {
      logo: '/assets/logos/national.png',
      name: 'À propos du Forum Mondial des organes consultatifs nationaux sur les ODD :',
      about: "Le Forum Mondial est un réseau qui relie les connaissances et l'expérience des commissions consultatives multipartites, des conseils et des organes similaires pour le développement durable. Ces organes contribuent aux architectures institutionnelles nationales pour la mise en œuvre des objectifs de développement durable (ODD). En rapprochant les connaissances et les intérêts des différents groupes de parties prenantes, ils favorisent l'acceptation sociale et la cohésion de la société en période de transformation. La demande pour leur travail de facilitation des résultats de négociation ne peut être sous-estimée. Ce forum pour et par les organes consultatifs nationaux multipartites est aussi hétérogène que les contextes respectifs dans lesquels se trouvent ses membres, qui varient en conséquence dans leur développement institutionnel, leur configuration, leur mandat et leur rôle. Un échange constant dans et entre les groupes de travail crée un riche marché d'idées, de mécanismes de négociation et de mesures politiques efficaces qui peuvent facilement être transférés et adaptés aux besoins et demandes locaux ailleurs. En tant que réseau axé sur la demande, il fait constamment évoluer son orientation dans des processus collectifs. Avec son riche pool de connaissances collectives, le forum invite efficacement les parties prenantes et les gouvernements du monde entier à adapter, mettre en œuvre et accélérer conjointement la réalisation de l'Agenda 2030 et des ODD.",
      website: 'http://www.sdg-advisorybodies.net/',
    },
    {
      logo: '/assets/logos/IFDD-CourtFondTransparent.png',
      name: 'L\'Institut de la Francophonie pour le Développement Durable(IFDD)',
      about: "L'Institut de la Francophonie pour le développement durable (IFDD) est un organe subsidiaire de l'Organisation internationale de la Francophonie (OIF) et est basé à Québec. Initialement connu sous le nom d'« Institut de l'Énergie des Pays ayant en commun l'usage du Français (IEPF) », l'IFDD a été créé en 1988 peu après le deuxième Sommet de la Francophonie, tenu à Québec en 1987. Il a été mis en place en réponse aux crises énergétiques mondiales et à la volonté des chefs d'État et de gouvernement des pays francophones de mener une action concertée pour soutenir le développement du secteur de l'énergie dans les pays membres. En 1996, l'Institut a adopté les résolutions du Sommet de la Terre de Rio en 1992 comme principe directeur de son action, et est devenu l'« Institut de l'énergie et de l'environnement de la Francophonie ». En 2013, suite à la Conférence Rio+20, il est devenu l'« Institut de la Francophonie pour le développement durable (IFDD) ». Sa mission est de contribuer à la formation et au renforcement des capacités des acteurs du développement dans les pays francophones dans les secteurs de l'énergie et de l'environnement; au soutien d'initiatives relatives au développement et à la mise en œuvre de programmes de développement durable; à la promotion de l'approche du développement durable dans l'espace francophone; et au développement de partenariats dans les différents secteurs du développement économique et social, notamment l'environnement et l'énergie.",
      website: 'https://www.ifdd.francophonie.org/',
    },
    {
      logo: '/assets/logos/oif.svg',
      name: 'L\'Organisation Internationale de la Francophonie',
      about: "L'Organisation internationale de la Francophonie (OIF) est une institution fondée sur le partage d'une langue, le français, et de valeurs communes. Elle rassemble 88 États et gouvernements. Le rapport sur la langue française dans le monde, publié en 2018, établit le nombre de francophones à 300 millions. Présente sur les cinq continents, l'OIF mène des actions politiques et de coopération dans les domaines prioritaires suivants : la langue française et la diversité culturelle et linguistique ; la paix, la démocratie et les droits de l'homme ; l'éducation et la formation ; le développement durable et la solidarité. Dans toutes ses actions, l'OIF accorde une attention particulière aux jeunes et aux femmes, ainsi qu'à l'accès aux technologies de l'information et de la communication. La Secrétaire générale conduit l'action politique de la Francophonie, dont elle est la porte-parole et la représentante officielle au niveau international. Louise Mushikiwabo a été élue à ce poste lors du XVIIe Sommet de la Francophonie à Erevan, en Arménie, en octobre 2018, et a pris ses fonctions en janvier 2019. 54 États et gouvernements membres, 7 membres associés, 27 observateurs.",
      website: 'https://www.francophonie.org/',
    },
    {
      logo: '/assets/logos/german.png',
      name: 'Conseil Allemand pour le Développement Durable',
      about: "Le Conseil allemand pour le développement durable (RNE) conseille le gouvernement fédéral sur les questions de politique de durabilité. Il agit à ce titre en tant qu'entité indépendante, et depuis 2001, ses membres sont nommés tous les trois ans par le gouvernement fédéral. Le Conseil est composé de 15 personnalités publiques, comprenant des individus de la société civile, du secteur des affaires, de la communauté scientifique et de la sphère politique. Le Conseil mène également ses propres projets visant à faire progresser le sujet de la durabilité de manière pratique. En outre, il contribue à façonner l'élan thématique au sein du dialogue politique et sociétal. Le Conseil est soutenu dans ses activités par un bureau administratif basé à Berlin. Le Conseil allemand pour le développement durable (RNE) soutient le projet présenté sur ce site et félicite les partenaires du Bénin et du Togo pour le succès de leur travail. Veuillez trouver <a href='https://www.ifdd.francophonie.org/wp-content/uploads/2022/05/RNE-Lettre-de-soutien.pdf' target='_blank' style='color: #0056b3; text-decoration: underline; font-weight: bold;'>ici</a> la lettre officielle de soutien.",
      website: 'https://www.nachhaltigkeitsrat.de/en/',
    }
  ];

  partnersEn: any[] = [
    {
      logo: '/assets/logos/national.png',
      name: 'About the Global Forum for National SDG Advisory Bodies:',
      about: "The Global Forum is a network that connects the knowledge and experience of multi-stakeholder advisory commissions, councils and similar bodies for sustainable development. These bodies contribute to the national institutional architectures for the implementation of the Sustainable Development Goals (SDGs). By bridging knowledge and interests of various stakeholder groups, multi-stakeholder advisory bodies foster social acceptance and cohesion within society in times of transformation. The demand for their work in facilitating negotiation outcomes cannot be underestimated. This forum for and by national multi-stakeholder advisory bodies is as heterogeneous as the respective contexts its members are in, which vary accordingly in their institutional development, set-up, mandate and role. Constant exchange in and across working groups creates a rich marketplace of ideas, negotiation mechanisms and effective policy measures that can easily be transferred and tailored to local needs and demands elsewhere. As a demand-driven network, it constantly evolves its focus in collective processes. With its rich pool of collective knowledge, the forum effectively invites stakeholders and governments around the globe to adapt, implement and jointly accelerate the delivery of the 2030 Agenda and the SDGs.",
      website: 'http://www.sdg-advisorybodies.net/',
    },
    {
      logo: '/assets/logos/IFDD-CourtFondTransparent.png',
      name: 'Institut de la Francophonie pour le Développement Durable (IFDD)',
      about: "The Institut de la Francophonie pour le développement durable (IFDD) is a subsidiary body of the Organisation internationale de la Francophonie (OIF) and is based in Quebec City. Originally known as the « Institut de l'Énergie des Pays ayant en commun l'usage du Français (IEPF) », the IFDD was created in 1988 shortly after the second Francophonie Summit, held in Quebec in 1987. It was set up in response to the global energy crises and the desire of the heads of state and government of French-speaking countries to take concerted action to support the development of the energy sector in member countries. In 1996, the Institute adopted the resolutions of the Rio Earth Summit in 1992 as the guiding principle for its action, and became the « Institut de l'énergie et de l'environnement de la Francophonie ». In 2013, following the Rio+20 Conference, it became the « Institut de la Francophonie pour le développement durable (IFDD) ». Its mission is to contribute to training and capacity-building for development players in French-speaking countries in the energy and environment sectors; supporting initiatives relating to the development and implementation of sustainable development programmes; promoting the sustainable development approach in the French-speaking world; and developing partnerships in the various sectors of economic and social development, particularly the environment and energy.",
      website: 'https://www.ifdd.francophonie.org/',
    },
    {
      logo: '/assets/logos/oif.svg',
      name: 'Organisation internationale de la Francophonie',
      about: "The Organisation internationale de la Francophonie (OIF) is an institution founded on the sharing of a language, French, and common values. It brings together 88 states and governments. The report on the French language in the world, published in 2018, puts the number of French speakers at 300 million. Present on five continents, the OIF carries out political and cooperation activities in the following priority areas: the French language and cultural and linguistic diversity; peace, democracy and human rights; education and training; sustainable development and solidarity. In all its actions, the OIF pays particular attention to young people and women, and to access to information and communication technologies. The Secretary General leads the political action of La Francophonie, of which she is the spokesperson and official representative at international level. Louise Mushikiwabo was elected to the post at the XVII Francophonie Summit in Yerevan, Armenia, in October 2018, and took up her duties in January 2019. 54 member states and governments, 7 associate members, 27 observers.",
      website: 'https://www.francophonie.org/',
    },
    {
      logo: '/assets/logos/german.png',
      name: 'German Council for Sustainable Development',
      about: "The German Council for Sustainable Development (RNE) advises the Federal Government on issues of sustainability policy. It acts in this capacity as an independent entity, and since 2001 its members have been appointed every three years by the Federal Government. The Council consists of 15 public figures, comprising individuals from civil society, the business sector, the scientific community and the political arena. The Council also carries out its own projects aimed at advancing the topic of sustainability in practical terms. In addition, it helps shape topically focused momentum within policy and societal dialogue. The Council is supported in its activities by an administrative office based in Berlin. The German Council for Sustainable Development (RNE) supports the project presented on this site and congratulates the partners in Benin and Togo on the success of their work. Please find the official letter of support <a href='https://www.ifdd.francophonie.org/wp-content/uploads/2022/05/RNE-Lettre-de-soutien.pdf' target='_blank' style='color: #0056b3; text-decoration: underline; font-weight: bold;'>here</a>.",
      website: 'https://www.nachhaltigkeitsrat.de/en/',
    }
  ];


  language: string | null = 'fr';
  
  constructor(private storage: StorageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.language = this.storage.getItem('language');
    console.log(this.language)

    // Sécuriser le HTML pour chaque partenaire
    this.partners.forEach(partner => {
      partner.safeAbout = this.sanitizer.bypassSecurityTrustHtml(partner.about);
    });

    this.partnersEn.forEach(partner => {
      partner.safeAbout = this.sanitizer.bypassSecurityTrustHtml(partner.about);
    });
  }
}
