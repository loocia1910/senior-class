'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const createdAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    const updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

    await queryInterface.bulkInsert('Reviews', [
     {
      contents: '오일 파스텔 수업을 듣고 제 마음이 편안해 졌습니다. 선생님도 잘 가르쳐 주시고 너무 좋네요',
      userId: 1,
      classId: 1,
      createdAt,
      updatedAt
     },
     {
      contents: '그림 수업을 오랜만에 들으니 너무 재미있네요. 오일 파스텔만의 매력에 빠져듭니당~~',
      userId: 2,
      classId: 1,
      createdAt,
      updatedAt
     },
     {
      contents: '처음 그림을 배워보는데, 선생님이 초보자에게 맞춰 잘 가르쳐 주십니다. 감사합니다.',
      userId: 3,
      classId: 1,
      createdAt,
      updatedAt
     },
     {
      contents: '이 수업 시간 가는 줄 모르겠어요. 이 퀄리티에 가격이 정말 저렴한 것 같습니다. 다음 수업에 또 들으려고 합니다.^^',
      userId: 4,
      classId: 1,
      createdAt,
      updatedAt
     },
     {
      contents: '수업을 듣고 제 삶을 다시 돌아보게 됩니다. 나이가 많아서 무엇을 해야할 지 잘 몰랐었는데, 수업을 듣고 저도 할 수 있다는 생각을 했어요.',
       userId: 1,
       classId: 5,
       createdAt,
       updatedAt
     },
     {
      contents: '꼭 한 번 들어보시길 추천드려요! 우리 중년 여러분 모두 화이팅 입니다.',
       userId: 11,
       classId: 5,
       createdAt,
       updatedAt
     },
     {
      contents: '중년 퇴임한지 어느덧 5년이 되었는데, 제 삶에 또 다른 변화가 올 것 같습니다. 같이 수업들어요~',
       userId: 12,
       classId: 5,
       createdAt,
       updatedAt
     },
     {
      contents: '오랜만에 남편에게 브라우니를 만들어 주니 참 좋아하네요. 연애시절로 돌아간 것 같아 좋았습니다.',
       userId: 8,
       classId: 20,
       createdAt,
       updatedAt
     },
     {
      contents: '집에서 간단히 이렇게 맛있는 브라우니를 만들 수 있을 줄 몰랐네요. 굿굿',
       userId: 9,
       classId: 20,
       createdAt,
       updatedAt
     },
     {
      contents: '많은 사람들과 즐겁게 노래를 부를 수 있어 즐겁습니다. 집에만 계시지 말고 저희 수업 같이 들어요.',
       userId: 15,
       classId: 25,
       createdAt,
       updatedAt
     },
     {
      contents: '라탄으로 손가방 만드는데 시간가는 줄 모르겠더라고요. 오랜만에 무언가에 집중을 하니 참 좋네요.',
       userId: 19,
       classId: 12,
       createdAt,
       updatedAt
     },
     {
      contents: '자식들에게 유튜브 어떻게 하는지 물어보기 쑥스러워 이 수업을 듣기 시작했어요. 저도 인제 구독자 만명이 될 수 있겠죠?ㅎㅎ',
       userId: 17,
       classId: 6,
       createdAt,
       updatedAt
     },
     {
      contents: '꽃으로 청을 담으니 향도 좋고, 제 마음도 덩달아 좋아집니다.',
       userId: 16,
       classId: 26,
       createdAt,
       updatedAt
     },
     {
      contents: '정년 퇴임 후 카폐를 차릴려고 이 수업을 듣게 되었습니다. 쌤도 너무 좋고 수업도 재미있습니다.',
       userId: 3,
       classId: 28,
       createdAt,
       updatedAt
     },
     {
      contents: '새로운 일을 시작하려고 하는데, 바리스타에 도전하려고요.^^',
       userId: 2,
       classId: 28,
       createdAt,
       updatedAt
     },
     {
      contents: '선생님도 친절히 잘 알려주시고, 수업도 쉽고 재미있네요. 강추요!',
       userId: 1,
       classId: 28,
       createdAt,
       updatedAt
     },
     {
      contents: '하프의 매력이란게 이런 걸까요? 집에서도 연습하는데 시간가는 줄 모르겠네요ㅎㅎ',
       userId: 4,
       classId: 37,
       createdAt,
       updatedAt
     },
     {
      contents: '어떤 운동을 할까 고민하다 우연히 이 수업을 알게되었습니다. 몸에 무리가지 않아 좋고, 마음도 건강해지는 기분이네요!',
       userId: 2,
       classId: 36,
       createdAt,
       updatedAt
     },
     {
      contents: '뮤직 테라피, 처음에는 생소했지만, 음악으로 마음을 치유한다는 거 너무 좋은 것 같아요. 강추요!',
       userId: 4,
       classId: 29,
       createdAt,
       updatedAt
     },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Reviews', null, {});
  }
};
