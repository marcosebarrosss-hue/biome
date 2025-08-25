import { Profession, Biome, Item, AppTheme, BiomeId } from './types';

export const ADMIN_USER = 'marcos';
export const ADMIN_PASSWORD = 'marcos1311';

export const PROFESSIONS: Profession[] = ['Biólogo', 'Enfermeiro', 'Médico', 'Engenheiro Civil', 'Psicólogo', 'Professor'];

export const REWARD_ITEMS: Item[] = [
    { id: 'item_oceano', name: 'Rede de Plâncton', description: 'Uma rede para coletar amostras marinhas.', type: 'equipment', biome: BiomeId.Oceano, profession: 'Biólogo', imageUrl: 'https://img.icons8.com/plasticine/100/fishing-net.png', wearableImageUrl: 'https://img.icons8.com/plasticine/100/fishing-net.png', wearableStyle: { position: 'absolute', bottom: '10%', right: '0%', width: '40%' } },
    { id: 'item_litoral', name: 'Prancha de Surf', description: 'Para aproveitar as ondas e estudar as correntes.', type: 'equipment', biome: BiomeId.Litoral, imageUrl: 'https://img.icons8.com/plasticine/100/surfboard.png', wearableImageUrl: 'https://img.icons8.com/plasticine/100/surfboard.png', wearableStyle: { position: 'absolute', bottom: '5%', left: '-20%', width: '60%', transform: 'rotate(-20deg)' } },
    { id: 'item_amazonia', name: 'Kit de Primeiros Socorros', description: 'Essencial para tratar picadas e arranhões na floresta.', type: 'equipment', biome: BiomeId.Amazonia, profession: 'Enfermeiro', imageUrl: 'https://img.icons8.com/plasticine/100/first-aid-kit.png', wearableImageUrl: 'https://img.icons8.com/plasticine/100/first-aid-kit.png', wearableStyle: { position: 'absolute', top: '40%', left: '0%', width: '35%' } },
    { id: 'item_cerrado', name: 'Botas de Trilha', description: 'Proteção contra o terreno acidentado e a vegetação.', type: 'clothing', biome: BiomeId.Cerrado, imageUrl: 'https://img.icons8.com/plasticine/100/hiking-boots.png', wearableImageUrl: 'https://i.imgur.com/gS22F26.png', wearableStyle: { position: 'absolute', bottom: '0%', left: '15%', width: '70%', zIndex: 1 } },
    { id: 'item_caatinga', name: 'Cantil de Água', description: 'Para se manter hidratado no clima semiárido.', type: 'equipment', biome: BiomeId.Caatinga, imageUrl: 'https://img.icons8.com/plasticine/100/canteen.png', wearableImageUrl: 'https://img.icons8.com/plasticine/100/canteen.png', wearableStyle: { position: 'absolute', top: '45%', right: '5%', width: '30%' } },
    { id: 'item_mata_atlantica', name: 'Binóculos', description: 'Perfeito para avistar aves raras na densa floresta.', type: 'equipment', biome: BiomeId.MataAtlantica, profession: 'Biólogo', imageUrl: 'https://img.icons8.com/plasticine/100/binoculars.png', wearableImageUrl: 'https://i.imgur.com/8cn6d8a.png', wearableStyle: { position: 'absolute', top: '28%', left: '20%', width: '60%' } },
    { id: 'item_pantanal', name: 'Chapéu de Explorador', description: 'Proteção contra o sol forte das planícies alagadas.', type: 'clothing', biome: BiomeId.Pantanal, imageUrl: 'https://img.icons8.com/plasticine/100/safari-hat.png', wearableImageUrl: 'https://i.imgur.com/5Jk1J2p.png', wearableStyle: { position: 'absolute', top: '-5%', left: '12%', width: '75%' } },
    { id: 'item_pampa', name: 'Diário de Campo', description: 'Para anotar observações sobre a flora e fauna.', type: 'equipment', biome: BiomeId.Pampa, profession: 'Professor', imageUrl: 'https://img.icons8.com/plasticine/100/spiral-bound-booklet.png', wearableImageUrl: 'https://img.icons8.com/plasticine/100/spiral-bound-booklet.png', wearableStyle: { position: 'absolute', bottom: '15%', left: '5%', width: '30%' } },
];

export const BIOMES: Biome[] = [
    {
        id: BiomeId.Oceano,
        name: 'Oceano Atlântico',
        description: 'A vasta imensidão azul que banha o Brasil, lar de uma incrível biodiversidade marinha, desde corais a grandes mamíferos.',
        states: { text: 'Toda a costa brasileira.' },
        culture: { text: 'A cultura oceânica está ligada à pesca, navegação e às comunidades caiçaras. Festas como a de Iemanjá celebram a força do mar.' },
        economy: { text: 'Pesca, turismo, extração de petróleo e gás, e transporte marítimo são as principais atividades.' },
        conservation: {
            status: { text: 'Ameaçado pela poluição, pesca predatória e mudanças climáticas.' },
            threatenedSpecies: ['Baleia-franca-austral', 'Mero', 'Tartaruga-de-couro'],
        },
        quiz: [
            { question: 'Qual o nome dado à faixa de mar pertencente ao Brasil?', options: ['Mar Territorial', 'Amazônia Azul', 'Costa Dourada', 'Oceano Brasileiro'], correctAnswer: 'Amazônia Azul' },
            { question: 'Qual destes animais ameaçados vive no Oceano Atlântico brasileiro?', options: ['Urso Polar', 'Pinguim Imperador', 'Baleia-franca-austral', 'Leão'], correctAnswer: 'Baleia-franca-austral' }
        ],
        rewardItemId: 'item_oceano',
        unlocks: BiomeId.Litoral,
        mapPosition: { top: '55%', left: '80%' },
        svgPathD: 'M800,200 L850,750 L800,700 Z',
    },
    {
        id: BiomeId.Litoral,
        name: 'Litoral',
        description: 'A faixa costeira do Brasil, com mais de 7.000 km de praias, manguezais e restingas. É uma zona de transição entre o mar e a terra.',
        states: { text: 'Todos os estados costeiros, do Amapá ao Rio Grande do Sul.' },
        culture: { text: 'Marcada pela diversidade, com influências indígenas, africanas e europeias. A culinária é rica em frutos do mar e a música, como o forró e o samba, é vibrante.' },
        economy: { text: 'Turismo é a principal atividade, junto com a pesca, carcinicultura (criação de camarão) e portos.' },
        conservation: {
            status: { text: 'Sofre com a especulação imobiliária, poluição e destruição de manguezais.' },
            threatenedSpecies: ['Peixe-boi-marinho', 'Caranguejo-uçá', 'Guará'],
        },
        quiz: [
            { question: 'O que é um manguezal?', options: ['Uma floresta no deserto', 'Um tipo de praia rochosa', 'Um ecossistema de transição entre rio e mar', 'Uma plantação de mangas'], correctAnswer: 'Um ecossistema de transição entre rio e mar' },
        ],
        rewardItemId: 'item_litoral',
        unlocks: BiomeId.MataAtlantica,
        mapPosition: { top: '60%', left: '75%' },
        svgPathD: 'M750,250 L800,700 L750,600 L700,400 Z',
    },
    {
        id: BiomeId.MataAtlantica,
        name: 'Mata Atlântica',
        description: 'Uma das florestas mais ricas em biodiversidade e mais ameaçadas do mundo. Originalmente, estendia-se por quase toda a costa brasileira.',
        states: { text: 'Presente em 17 estados, incluindo Rio de Janeiro, São Paulo, Bahia e Paraná.' },
        culture: { text: 'Berço da colonização, abriga cidades históricas e uma rica cultura caipira e caiçara. O fandango e a catira são danças típicas.' },
        economy: { text: 'Agricultura (café, cana-de-açúcar), indústria e turismo ecológico.' },
        conservation: {
            status: { text: 'Extremamente fragmentada, restando menos de 12% da cobertura original.' },
            threatenedSpecies: ['Mico-leão-dourado', 'Onça-pintada', 'Pau-brasil'],
        },
        quiz: [
            { question: 'Qual árvore, que deu nome ao país, é um símbolo da Mata Atlântica?', options: ['Ipê Amarelo', 'Seringueira', 'Pau-brasil', 'Araucária'], correctAnswer: 'Pau-brasil' },
        ],
        rewardItemId: 'item_mata_atlantica',
        unlocks: BiomeId.Pampa,
        mapPosition: { top: '75%', left: '68%' },
        svgPathD: 'M600,450 L500,600 L600,750 L750,600 Z',
    },
    {
        id: BiomeId.Pampa,
        name: 'Pampa',
        description: 'Também conhecido como Campos Sulinos, é caracterizado por uma paisagem de campo aberto com gramíneas, coxilhas e matas de galeria.',
        states: { text: 'Ocupa mais da metade do Rio Grande do Sul.' },
        culture: { text: 'A cultura gaúcha é dominante, com o churrasco, o chimarrão e as tradições do homem do campo (o gaúcho).' },
        economy: { text: 'Pecuária extensiva e agricultura, principalmente de soja, milho e arroz.' },
        conservation: {
            status: { text: 'Ameaçado pela expansão da agricultura e pela introdução de espécies exóticas.' },
            threatenedSpecies: ['Gato-palheiro', 'Veado-campeiro', 'Caboclinho-de-barriga-verde'],
        },
        quiz: [
            { question: 'Qual é a bebida típica do Pampa?', options: ['Cachaça', 'Caipirinha', 'Chimarrão', 'Açaí'], correctAnswer: 'Chimarrão' },
        ],
        rewardItemId: 'item_pampa',
        unlocks: BiomeId.Pantanal,
        mapPosition: { top: '85%', left: '55%' },
        svgPathD: 'M500,700 L400,800 L600,850 L600,750 Z',
    },
    {
        id: BiomeId.Pantanal,
        name: 'Pantanal',
        description: 'A maior planície inundável do planeta, um santuário de vida selvagem com uma paisagem que se transforma a cada estação de cheia e seca.',
        states: { text: 'Mato Grosso e Mato Grosso do Sul.' },
        culture: { text: 'A cultura pantaneira é ligada aos ciclos da natureza, à pecuária e à pesca. O cururu e o siriri são manifestações culturais.' },
        economy: { text: 'Pecuária, pesca e ecoturismo, com foco na observação de animais.' },
        conservation: {
            status: { text: 'Ameaçado por queimadas, desmatamento nas cabeceiras dos rios e uso de agrotóxicos.' },
            threatenedSpecies: ['Ariranha', 'Tuiuiú (ave-símbolo)', 'Cervo-do-pantanal'],
        },
        quiz: [
            { question: 'Qual é a ave-símbolo do Pantanal?', options: ['Arara-azul', 'Tucano', 'Tuiuiú', 'Garça'], correctAnswer: 'Tuiuiú' },
        ],
        rewardItemId: 'item_pantanal',
        unlocks: BiomeId.Cerrado,
        mapPosition: { top: '68%', left: '50%' },
        svgPathD: 'M350,550 L400,650 L500,600 L450,500 Z',
    },
    {
        id: BiomeId.Cerrado,
        name: 'Cerrado',
        description: 'A savana mais biodiversa do mundo, conhecida como o "berço das águas" por abrigar nascentes de importantes bacias hidrográficas.',
        states: { text: 'Ocupa a parte central do Brasil, incluindo Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul e oeste de Minas Gerais e Bahia.' },
        culture: { text: 'Cultura sertaneja, com destaque para a culinária com frutos nativos como pequi e baru. A música sertaneja tem fortes raízes aqui.' },
        economy: { text: 'Grande produtor de grãos (soja, milho, algodão) e pecuária.' },
        conservation: {
            status: { text: 'É o segundo bioma mais ameaçado do Brasil, principalmente pela expansão do agronegócio.' },
            threatenedSpecies: ['Lobo-guará', 'Tatu-canastra', 'Tamanduá-bandeira'],
        },
        quiz: [
            { question: 'O Cerrado é conhecido como o "berço das águas". Por quê?', options: ['Porque chove muito o ano todo', 'Porque tem muitos lagos', 'Porque abriga nascentes de grandes rios', 'Porque é uma grande planície inundável'], correctAnswer: 'Porque abriga nascentes de grandes rios' },
        ],
        rewardItemId: 'item_cerrado',
        unlocks: BiomeId.Caatinga,
        mapPosition: { top: '55%', left: '60%' },
        svgPathD: 'M450,300 L350,450 L500,600 L600,450 Z',
    },
    {
        id: BiomeId.Caatinga,
        name: 'Caatinga',
        description: 'Único bioma exclusivamente brasileiro, é uma floresta seca adaptada ao clima semiárido, que surpreende com sua resiliência e biodiversidade.',
        states: { text: 'Abrange todo o sertão nordestino e o norte de Minas Gerais.' },
        culture: { text: 'Fortemente marcada pela resiliência do povo sertanejo. A literatura de cordel, o forró e as festas juninas são expressões marcantes.' },
        economy: { text: 'Pecuária de caprinos e ovinos, agricultura de subsistência e fruticultura irrigada.' },
        conservation: {
            status: { text: 'Ameaçada pelo desmatamento para obtenção de lenha e pela desertificação.' },
            threatenedSpecies: ['Ararinha-azul (extinta na natureza)', 'Soldadinho-do-araripe', 'Tatu-bola'],
        },
        quiz: [
            { question: 'Qual animal símbolo da Copa do Mundo de 2014 é típico da Caatinga?', options: ['Onça-pintada', 'Lobo-guará', 'Tatu-bola', 'Mico-leão-dourado'], correctAnswer: 'Tatu-bola' },
        ],
        rewardItemId: 'item_caatinga',
        unlocks: BiomeId.Amazonia,
        mapPosition: { top: '40%', left: '68%' },
        svgPathD: 'M600,300 L550,400 L650,500 L700,400 Z',
    },
    {
        id: BiomeId.Amazonia,
        name: 'Amazônia',
        description: 'A maior floresta tropical do mundo, essencial para o equilíbrio climático do planeta, abrigando uma imensa sociobiodiversidade.',
        states: { text: 'Ocupa quase metade do território brasileiro, principalmente nos estados da Região Norte.' },
        culture: { text: 'Rica e diversa, com forte presença de povos indígenas e comunidades ribeirinhas. Lendas como a do Boto e da Iara, e festas como o Festival de Parintins, são famosas.' },
        economy: { text: 'Extrativismo (castanha, açaí, borracha), pesca, mineração, indústria (Zona Franca de Manaus) e agropecuária.' },
        conservation: {
            status: { text: 'Ameaçada pelo desmatamento ilegal, garimpo, queimadas e construção de hidrelétricas.' },
            threatenedSpecies: ['Peixe-boi-da-amazônia', 'Boto-cor-de-rosa', 'Sauim-de-coleira'],
        },
        quiz: [
            { question: 'Qual é o maior rio em volume de água do mundo, localizado na Amazônia?', options: ['Rio Nilo', 'Rio Tietê', 'Rio São Francisco', 'Rio Amazonas'], correctAnswer: 'Rio Amazonas' },
        ],
        rewardItemId: 'item_amazonia',
        unlocks: null,
        mapPosition: { top: '30%', left: '40%' },
        svgPathD: 'M300,200 L200,300 L350,450 L450,300 Z',
    },
];

export const DEFAULT_THEME: AppTheme = {
    primaryColor: '#16a34a', // green-600
    secondaryColor: '#facc15', // yellow-400
    logoUrl: 'https://img.icons8.com/color/96/brazil-map.png',
    adminAvatarUrl: 'https://img.icons8.com/fluency-systems-filled/96/administrator-male.png',
    mapImageUrl: 'https://images.unsplash.com/photo-1601681531238-a15e47e2311c?q=80&w=2574&auto=format&fit=crop',
    mapImageObjectFit: 'cover',
    mapImageObjectPosition: '50% 50%',
    mapImageScale: 1,
    dashboardBackgroundImageUrl: 'https://images.unsplash.com/photo-1502102941369-698605a2f3be?q=80&w=2070&auto=format&fit=crop',
    dashboardBackgroundSize: 'cover',
    dashboardBackgroundPosition: '50% 50%',
    loginBackgroundImageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop',
    loginBackgroundSize: 'cover',
    loginBackgroundPosition: '50% 50%',
    registerBackgroundImageUrl: 'https://images.unsplash.com/photo-1616254291136-214e2a16a8ea?q=80&w=2070&auto=format&fit=crop',
    registerBackgroundSize: 'cover',
    registerBackgroundPosition: '50% 50%',
    placeholderImageUrl: 'https://img.icons8.com/plasticine/100/image.png',
    mapHeight: 'h-full',
    biomeModuleBounds: { width: '768px', height: 'auto' },
    managementModalBounds: { width: '1024px', height: '640px' },
    adminToolbarBounds: { width: '384px', height: 'auto' },
};