# Projets universitaires
_Réalisé au sein d’un cours universitaire_

1. [Bateau automatisé de nettoyage côtier](#bateau)</a>
2. [Voiture télécommandée](#voiture-telecommandee) - développement de contrôleur et microcontrôleur pour un système mécatronique réaliste.
3. [Processus d’automatisation d’un robot mobile avec vision par ordinateur](#robot-mobile)
4. [Fabrication d’un objet (gyroscope) en aluminium en utilisant des procédés de fabrication par machine (tour et fraiseuse).](#gyroscope) Observation du même procédé par machine-outil à commande numérique (CNC).

## 1. <a name="bateau">Bateau automatisé de nettoyage côtier</a>
_MATLAB, Simulink, microcontrôleur Arduino, Raspberry Pi, Python, OpenCV, SolidWorks, Linux_

Un bateau autonome, reconnaissant les déchets à la surface de l’eau et se propulsant pour les ramasser à l’aide d’un système de filet. Le bateau se recharge grâce à l'énergie solaire et effectue une ronde journalière à une heure et un périmètre prédéterminé. Ce projet est le résultat d’un travail en équipe de six personnes ayant chacune des affinités dans une des facettes du projet. La combinaison de nos points fort à mener à bien ce projet. La durée de ce projet à été de deux semestre universitaire (environ huit mois). Les différentes facettes du projet étant, la conception et l’analyse mécanique du bateau en soit, l’utilisation de régulateur PID afin de mouvoir le bateau, et l’inclusion synergique d’un ordinateur sur le bateau ordonnant le mouvement. J’ai travaillé sur cette dernière partie, en codant en Python grâce au Framework OpenCV un script étant capable de reconnaître un objet sur la surface de l’eau et d’inclure les commandes nécessaires au mouvement du filet des moteurs pour attraper celui-ci.

- Le régulateur PID est modélisé en utilisant MATLAB.  
- La conception du bateau est modélisée sur SolidWorks.  
- Le code python est exécuté sur une distribution adéquate de Linux sur Raspberry Pi (Raspbian).  
- Le contrôleur Arduino est aussi commandé directement grâce au Raspberry Pi.  
- Un mode manuel télécommandé est aussi implémenté pour test.

![Photo projet bateau 1][bateau-1]

![Photo projet bateau 1][bateau-2]

[bateau-1]: images/projets/bateau-1.jpg
[bateau-2]: images/projets/bateau-2.jpg
[bateau-3]: images/projets/bateau-3.jpg
[bateau-4]: images/projets/bateau-4.jpg

Vidéo du bateau en fonctionnement

## 2. <a name="voiture-telecommandee">Voiture télécommandée</a>  
_C++, Visual Studio, microcontrôleur Arduino, langage assembleur, robotique_

Construire une voiture télécommandée en utilisant un microcontrôleur arduino, la difficulté du projet réside dans l’utilisation du registre et de la programmation en assembleur. Il s’agit d’optimiser le code pour une exécution plus fluide et dynamique ainsi que d’obtenir un meilleur contrôle sur la mémoire.

- Architecture de microcontrôleur: ATmega328P et outils de développement  
- Entrée et sortie numériques (E/S parallèles, E/S série)  
- Communication (SPI, I2C, sans fil)  
- Programmation en langage C ++ et assembleur pour microcontrôleurs  
- Mécatronique

## 3. <a name="robot-mobile">Processus d’automatisation d’un robot mobile avec vision par ordinateur</a>  
_C++, vision par ordinateur, Visual Studio, microcontrôleur Arduino, robotique_

Développement d’un robot mobile contrôlé par un processus d’automatisation avec vision par ordinateur. Une camera est connecté à l’ordinateur, le robot est identifié ainsi que les obstacles et buts sur l’ordinateur et celui-ci envoie les commandes nécessaires pour mouvoir le robot et lui permettre de réagir aux mouvements repérés. Dans ce scénario, deux robots s’attaquent en s’envoyant des balles de ping-pong. Il s’agit d’éviter les balles et de contre attaquer pour toucher l’adversaire. Le robot intègre des actuateurs lui permettant de se mouvoir ainsi qu’un système de projectile afin d’attaquer l’adversaire.

- Programmation en C++ pour la mécatronique et l’automatisation  
- Vision par ordinateur et analyse de l’image  
- Modélisation et simulation des paramètres  
- Commande de rétroaction (Feedback Loop)  
- Optimisation et génération des trajectoires

## 4. <a name="gyroscope">Gyroscope</a>

# Projets personnels  
_Réalisé durant mon temps libre_  
1. Imprimante 3D  
2. Automatisation de maison  
3. Programmation

# Projets reliés au travail
_Réalisé dans le cadre d’un emploi_

## Maysy  
- Mise en place d’un système POS (point de vente) open-source agencé aux besoins de l’entreprises  
- Base de données incluses Derby SQL  
- Programme Python pour générer la base de données à partir de code-barres  
- Fichier batch pour sauvegarde et synchronisation automatisé  
- Accès et gestion à distance

## La Renaissance  
- Mise en place d’un serveur entreprise (gestion du logiciel de comptabilité), administration des autorisations utilisateurs pour documents.  
- Création d’un menu détaillée sous format Excel (utilisation de VBA pour plusieurs fonctionnalités), le fichier Excel génère automatiquement un document Word et calcul les divers frais liés  
- Création et gestion de sites web, adresses e-mail, et réseaux sociaux
