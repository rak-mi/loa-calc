import { AccMap } from './type';

export const imprintOptions = [
  '각성',
  '갈증',
  '강령술',
  '강화 무기',
  '강화 방패',
  '결투의 대가',
  '고독한 기사',
  '광기',
  '광전사의 비기',
  '구슬동자',
  '굳은 의지',
  '극의: 체술',
  '급소 타격',
  '기습의 대가',
  '긴급구조',
  '넘치는 교감',
  '달의 소리',
  '달인의 저력',
  '돌격대장',
  '두 번째 동료',
  '마나 효율 증가',
  '마나의 흐름',
  '멈출 수 없는 충동',
  '바리케이드',
  '버스트',
  '번개의 분노',
  '부러진 뼈',
  '분노의 망치',
  '분쇄의 주먹',
  '불굴',
  '사냥의 시간',
  '상급 소환사',
  '선수필승',
  '세맥타통',
  '속전속결',
  '슈퍼 차지',
  '승부사',
  '시선 집중',
  '실드 관통',
  '심판자',
  '아드레날린',
  '아르데타인의 기술',
  '안정된 상태',
  '약자 무시',
  '에테르 포식자',
  '여신의 가호',
  '역천지체',
  '예리한 둔기',
  '오의 강화',
  '오의난무',
  '완벽한 억제',
  '원한',
  '위기 모면',
  '일격필살',
  '잔재된 기운',
  '저주받은 인형',
  '전문의',
  '전투 태세',
  '절실한 구원',
  '절정',
  '절제',
  '점화',
  '정기 흡수',
  '정밀 단도',
  '죽음의 습격',
  '중갑 착용',
  '중력 수련',
  '진실된 용맹',
  '진화의 유산',
  '질량 증가',
  '초심',
  '최대 마나 증가',
  '추진력',
  '축복의 오라',
  '충격 단련',
  '타격의 대가',
  '탈출의 명수',
  '포격 강화',
  '폭발물 전문가',
  '피스메이커',
  '핸드거너',
  '화력 강화',
  '환류',
  '황제의 칙령',
  '황후의 은총',
];

export const penaltyOptions = [
  '공격력 감소',
  '공격속도 감소',
  '방어력 감소',
  '이동속도 감소',
];

export const dealOptions = ['치명', '특화', '제압', '신속', '인내', '숙련'];

export const itemNames = [
  '타락한 시간의 목걸이',
  '울부짖는 혼돈의 목걸이',
  '찬란한 구도자의 목걸이',
  '타오르는 의지의 목걸이',
  '타락한 예지의 목걸이',
  '울부짖는 환상의 목걸이',
  '찬란한 집행자의 목걸이',
  '공허한 운명의 목걸이',
  '참혹한 파멸의 목걸이',
  '거룩한 수호자의 목걸이',
  '솟구치는 의지의 목걸이',
  '타락한 시간의 귀걸이',
  '타락한 공간의 귀걸이',
  '울부짖는 혼돈의 귀걸이',
  '울부짖는 영겁의 귀걸이',
  '찬란한 구도자의 귀걸이',
  '찬란한 파멸자의 귀걸이',
  '타오르는 의지의 귀걸이',
  '타오르는 신념의 귀걸이',
  '타락한 예지의 귀걸이',
  '타락한 차원의 귀걸이',
  '울부짖는 환상의 귀걸이',
  '울부짖는 악몽의 귀걸이',
  '찬란한 집행자의 귀걸이',
  '찬란한 순례자의 귀걸이',
  '공허한 운명의 귀걸이',
  '공허한 인연의 귀걸이',
  '참혹한 파멸의 귀걸이',
  '참혹한 종말의 귀걸이',
  '거룩한 수호자의 귀걸이',
  '거룩한 해방자의 귀걸이',
  '솟구치는 의지의 귀걸이',
  '솟구치는 신념의 귀걸이',
  '타락한 시간의 반지',
  '타락한 공간의 반지',
  '울부짖는 혼돈의 반지',
  '울부짖는 영겁의 반지',
  '찬란한 구도자의 반지',
  '찬란한 파멸자의 반지',
  '타오르는 의지의 반지',
  '타오르는 신념의 반지',
  '타락한 예지의 반지',
  '타락한 차원의 반지',
  '울부짖는 환상의 반지',
  '울부짖는 악몽의 반지',
  '찬란한 집행자의 반지',
  '찬란한 순례자의 반지',
  '공허한 운명의 반지',
  '공허한 인연의 반지',
  '참혹한 파멸의 반지',
  '참혹한 종말의 반지',
  '거룩한 수호자의 반지',
  '거룩한 해방자의 반지',
  '솟구치는 의지의 반지',
  '솟구치는 신념의 반지',
];

export const initialAccMap: Record<string, AccMap> = {
  목걸이: {
    category: '목걸이',
    quality: 0,
    dealOption1: ['', 0],
    dealOption2: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  귀걸이1: {
    category: '귀걸이',
    quality: 0,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  귀걸이2: {
    category: '귀걸이',
    quality: 0,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  반지1: {
    category: '반지',
    quality: 0,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
  반지2: {
    category: '반지',
    quality: 0,
    dealOption1: ['', 0],
    name: '',
    imprintOption1: ['', 0],
    imprintOption2: ['', 0],
    imprintPenalty: ['', 0],
  },
};

export const imprintingFormToken = 'imprintingForm_v4';
