import { Component } from '@angular/core';
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
      about: "Le Forum Mondial est un réseau qui relie les connaissances et l'expérience des commissions consultatives multipartites, des conseils et des organes similaires pour le développement durable. Ces organes contribuent aux architectures institutionnelles nationales pour la mise en œuvre des objectifs de développement durable (ODD). En rapprochant les connaissances et les intérêts des différents groupes de parties prenantes, ils favorisent l'acceptation sociale et la cohésion de la société en période de transformation.",
      website: 'http://www.sdg-advisorybodies.net/',
    },
    {
      logo: '/assets/logos/ifdd.svg',
      name: 'L’Institut de la Francophonie pour le Développement Durable (IFDD)',
      about: "L’Institut de la Francophonie pour le développement durable (IFDD) est un organe subsidiaire de l’Organisation internationale de la Francophonie (OIF). Il contribue à la formation et au renforcement des capacités, soutient des initiatives en développement durable et promeut la gestion durable de l'énergie et de l'environnement.",
      website: 'https://www.ifdd.francophonie.org/',
    },
    {
      logo: '/assets/logos/oif.svg',
      name: 'L’Organisation Internationale de la Francophonie',
      about: "L’OIF est une institution fondée sur le partage du français et de valeurs communes. Elle rassemble 88 États et gouvernements et mène des actions dans les domaines de la diversité culturelle, de la paix, des droits de l'Homme, de l'éducation et du développement durable.",
      website: 'https://www.francophonie.org/',
    },
    {
      logo: '',
      name: 'Conseil Allemand pour le Développement Durable',
      about: "Le Conseil Allemand pour le Développement Durable conseille le gouvernement fédéral sur la durabilité. Depuis 2001, il soutient des projets et guide les dialogues sociétaux sur les enjeux de durabilité.",
      website: 'https://www.nachhaltigkeitsrat.de/en/',
    },
    {
      logo: '/assets/images/a20.png',
      name: "Conseil des Organisations Non-Gouvernementales d’Appui au Développement, Sénégal (CONGAD)",
      about: "Créé en 1982, CONGAD regroupe des ONG au Sénégal pour renforcer les capacités des OSC, des autorités locales et des médias et défendre des politiques publiques équitables.",
      website: '',
    },
    {
      logo: '/assets/images/a21.jpg',
      name: 'Forêts et Développement Rural (FODER), Cameroun',
      about: "FODER est une association environnementale à but non lucratif qui œuvre pour une gestion équitable et durable des ressources naturelles et pour l’amélioration des conditions de vie.",
      website: '',
    },
    {
      logo: '/assets/images/a22.png',
      name: "Initiative de la Société Civile pour les Objectifs de Développement Durable, Côte d’Ivoire",
      about: "Créée en 2017, cette initiative coordonne les actions des organisations de la société civile pour promouvoir, mettre en œuvre et suivre les ODD en Côte d’Ivoire.",
      website: '',
    },
    {
      logo: '/assets/images/a23.png',
      name: "Association des Nations Unies de Tanzanie (UNA Tanzania)",
      about: "UNA Tanzania, fondée en 1964, promeut les principes de la Charte des Nations Unies, sensibilise sur les droits humains et soutient les ODD.",
      website: '',
    },
  ];

  partnersEn: any[] = [
    {
      logo: '/assets/logos/national.png',
      name: 'About the Global Forum for National SDG Advisory Bodies:',
      about: "The Global Forum is a network connecting the knowledge and experience of multi-stakeholder advisory commissions and councils for sustainable development. It helps to implement the SDGs by bridging stakeholder interests and fostering societal cohesion.",
      website: 'http://www.sdg-advisorybodies.net/',
    },
    {
      logo: '/assets/logos/ifdd.svg',
      name: 'Institut de la Francophonie pour le Développement Durable (IFDD)',
      about: "The IFDD is a subsidiary body of the Organisation internationale de la Francophonie (OIF), contributing to training, development of sustainable programmes, and partnerships for energy and environmental management.",
      website: 'https://www.ifdd.francophonie.org/',
    },
    {
      logo: '/assets/logos/oif.svg',
      name: 'Organisation internationale de la Francophonie',
      about: "OIF is an institution founded on the sharing of the French language and common values. It unites 88 states and governments to act in education, culture, human rights, and sustainable development.",
      website: 'https://www.francophonie.org/',
    },
    {
      logo: '/assets/logos/german.png',
      name: 'German Council for Sustainable Development',
      about: "Since 2001, the German Council for Sustainable Development advises the federal government on sustainability, runs its own projects, and fosters sustainability-focused dialogue.",
      website: 'https://www.nachhaltigkeitsrat.de/en/',
    },
    {
      logo: '/assets/images/a20.png',
      name: "Council of Non-Governmental Organisations Supporting Development, Senegal (CONGAD)",
      about: "Established in 1982, CONGAD strengthens CSOs, local authorities, and media while advocating for fair public policies in Senegal.",
      website: '',
    },
    {
      logo: '/assets/images/a21.jpg',
      name: 'Forests and Rural Development (FODER), Cameroon',
      about: "FODER is a non-profit environmental association in Cameroon promoting sustainable natural resource management and better living conditions.",
      website: '',
    },
    {
      logo: '/assets/images/a22.png',
      name: "Civil Society Initiative for Sustainable Development Goals, Côte d’Ivoire (ISC/ODD-CI)",
      about: "Founded in 2017, ISC/ODD-CI coordinates civil society actions to promote, implement, and monitor the SDGs in Côte d’Ivoire.",
      website: '',
    },
    {
      logo: '/assets/images/a23.png',
      name: "United Nations Association of Tanzania (UNA Tanzania)",
      about: "Founded in 1964, UNA Tanzania supports UN Charter principles, raises public awareness, and works to achieve the SDGs in Tanzania.",
      website: '',
    },
  ];


  language: string | null = 'fr';
  
    constructor(private storage: StorageService) { }

  ngOnInit(): void {

    this.language = this.storage.getItem('language');
    console.log(this.language)
  }
}
