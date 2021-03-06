'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // type
    // 0 : 온라인
    // 1 : 오프라인
        // 서울 1
        // 경기도 2
        // 강원도 3
        // 전라도 4
        // 충청도 5
        // 경상도 6

    const createdAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
     const updatedAt = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    
      await queryInterface.bulkInsert('Classes', [
        {
          name: '오일 파스텔 정규 클래스',
          price: 32000,
          type: '0',
          discount: 8,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%98%A4%EC%9D%BC%ED%8C%8C%EC%8A%A4%ED%85%94.jpg',
          category: 'art',
          contents: '꾸덕하고 부드러운 질감으로 다양한 색을 표현할 수 있는 오일파스텔로 그림을 그려보는 건 어떠세요. 오일파스텔을 손으로 문질러 블렌딩하면서 그 위에 색을 차곡차곡 쌓아가며 나만의 매력적인 그림을 완성할 수 있습니다.',
          teacherInfo: '대학에서 미술치료를 전공하였습니다. 이외에 오일파스텔화, 아크릴화, 썬캐쳐 등의 수업을 진행하고 있습니다.',
          createdAt,
          updatedAt,
          teacherId: 1,
          region: '',
        },
        {
          name: '홈가드닝 클래스',
          price: 29000,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%ED%99%88%EA%B0%80%EB%93%9C%EB%8B%9D.jpg',
          category: 'craft',
          contents: '홈가드닝, 플랜테리어에 관심은 많지만 잘 기를 자신이 없어 매번 계획에 그쳤던 분이라면 가드닝 클래스와 함께하세요. 식물의 특성과 심는 방법, 키우는 방법을 이해하면 사랑스러운 나만의 정원을 만들고 가꾸며 일상 속 소소한 행복을 찾을 수 있습니다.',
          teacherInfo: '홍은동에서 플라워샵을 운영합니다. 이번 클래스를 진행하며 꽃을 사랑하고, 만드는 즐거움을 통해 소소한 행복과 힐링의 시간을 여러분과 함께 가져보고 싶어요. 반복되는 일상으로 무료하고 따분한 하루에 이클래스가 여러분의 허전한 마음에 소소한 행복과 성취감을 주었으면 좋겠습니다.',          
          createdAt,
          updatedAt,
          teacherId: 2,
          region: '',
        },
        {
          name: '핵심기능으로 시작하는 디지털 세상 입문', // 50+
          price: 9000,
          type: '0',
          discount: 15,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%94%94%EC%A7%80%ED%84%B8+%EC%84%B8%EC%83%81+%EC%9E%85%EB%AC%B8.jpg',
          category: 'career',
          contents: '시시각각 빠르게 변하는 디지털 세상. 핵심기능을 콕콕 알차게 배워 스마트한 디지털세상으로 입문할 수 있도록 시니어 선배가 알려드립니다.',
          teacherInfo: 'SNS 전문가 양성과정 교육 수료. 스마트시티 챌린지 사업 디지털 강의 등.',          
          createdAt,
          updatedAt,
          teacherId: 3,
          region: '',
        },
        {
          name: '미술 치유 클래스 - 수고했어, 나의 인생',
          price: 33900,
          type: '0',
          discount: 5,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%95%84%ED%8A%B8+%ED%85%8C%EB%9D%BC%ED%94%BC.jpg',
          category: 'career',
          contents: '나의 시간을 돌아보며 다양한 미술 활동을 하며 클래스 메이트와 소통합니다. 4주의 시간을 통해 굳어진 마음과 몸이 말랑말랑하게 풀어지는 시간을 경험하실 수 있습니다.',
          teacherInfo: '안녕하세요. 상담센터에서 미술치료사로 일하는 모나이입니다. 요양원, 데이케어센터, 치매안심센터 등 다양한 곳에서 시니어 분들을 만나왔습니다. 저와 함께 즐겁고 건강한 시간을 가져보세요.',          
          createdAt,
          updatedAt,
          teacherId:  1,
          region: '',
        },
        {
          name: '중년, 다시 비상을 꿈꾸다', // 50+
          price: 0, //무료
          type: '0',
          discount: 0,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%A4%91%EB%85%84+%EB%8B%A4%EC%8B%9C+%EB%B9%84%EC%83%81%EC%9D%84+%EA%BF%88%EA%BE%B8%EB%8B%A4.jpg',
          category: 'career',
          contents: '시니어 세대의 성공적인 인생 이모작을 위한 동기부여 및 방법론, 지속적인 사회활동을 위한 일활동 모색',
          teacherInfo: '인생은 아름다워 연구소장.',          
          createdAt,
          updatedAt,
          teacherId: 4,
          region: '',
        },
        {
          name: '유투브 구독자에서 크리에이터로 도전하기', // 50+
          price: 17900,
          type: '0',
          discount: 20,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%9C%A0%ED%88%AC%EB%B8%8C.jpg',
          category: 'career',
          contents: '디지털에이징 시대. 나만의 온라인 소통 플랫폼을 필수 입니다. 주요 SNS 영역을 탐색하고 소통 플랫촘을 만들어 디지털에이징 시대를 스마트하게 즐겨요.',
          teacherInfo: '50+ 유튜브 레벨업 강의.',          
          createdAt,
          updatedAt,
          teacherId: 5,
          region: '',
        },
        {
          name: '박수근 화백의 작품과 함께하는 덕수궁 나들이',
          price: 21900 ,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%B0%95%EC%88%98%EA%B7%BC+%ED%99%94%EB%B0%B1.jpg',
          category: 'art',
          contents: '전문 크루와 함께 최대 6명으로 구성된 프라이빗 미술 투어. 전통 근대의 조화를 느낄 수 있는 덕수궁 산책 코스. 특별한 공간에서의 스토리텔링과 나눔 커뮤니티 프로그램.',
          teacherInfo: 'OO현대 미술관 도슨트 경력 10년',          
          createdAt,
          updatedAt,
          teacherId: 6,
          region: '',
        },
        {
          name: '보태니컬 아트 정규 클래스',
          price: 32000,
          type: '0',
          discount: 8,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%B3%B4%ED%83%9C%EB%8B%88%EC%BB%AC+%EC%95%84%ED%8A%B8.jpg',
          category: 'art',
          contents: '수채화 물감을 이용해 식물과 풍경 등 자연의 아름다움을 그리면서 함께 힐링해 보아요^^. 집 안 곳곳 내가 그린 그림을 걸어둔다면 볼 때마다 기분이 좋아질 거예요.',
          teacherInfo: '1998년 부터 2018년까지 상암동에서 미술학원을 운영하였습니다. 저와 나이가 비슷한 분들과 함께 재미있게 그림 수업하고 싶어요.',          
          createdAt,
          updatedAt,
          teacherId: 7,
          region: '',
        },
        {
          name: '소묘 클래스',
          price: 28800,
          type: '0',
          discount: 15,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%86%8C%EB%AC%98.jpeg',
          category: 'art',
          contents: '그림을 배울 때 가장 기초가 되는 과정 소묘. 예쁜 선을 쓰는 법, 스케치부터 구도를 잡는 법, 그리고 음영 표현하는 방법 등 미술의 기본기를 알면 색을 다룰 때도 쉽게 접근 할 수 있어요. 풍경화, 동물화, 식물 등을 연필로 표현하면서 미술의 기본기를 닦아보세요.',
          teacherInfo: '대학에서 서양학과를 전공하였습니다. 현재 루시아라는 이름으로 소묘 작품을 중심으로 활동 중입니다.',          
          createdAt,
          updatedAt,
          teacherId: 8,
          region: '',
        },
        {
          name: '마카로 그린 여행 스케치 달력 만들기',
          price: 23000,
          type: '0',
          discount: 11,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%A7%88%EC%BB%A4%EB%A1%9C+%EA%B7%B8%EB%A6%B0.jpg',
          category: 'art',
          contents: '나만의 추억을 담은 그림 달력을 만듭니다. 달력의 컨셉을 정하고 마카 그리기 기법, 레이아웃에 대한 이해와 레터링, 드로잉을 5주간 경험합니다. 완성하고자 하는 그림의 방향성을 함께 잡아가며, 배운 것을 토대로 개인의 경험을 그림에 담아냅니다.',
          teacherInfo: '북아트와 회화 작업을 병행하며 아트 브랜드 루나를 운영하고 있습니다. 주위에서 일어나는 일상적인 일을 드로잉과 작업 일지로 남긴 후 드로잉을 조합해 스토리를 만듭니다.',          
          createdAt,
          updatedAt,
          teacherId: 11,
          region: '',
        },
        {
          name: '한지 공예 클래스',
          price: 22900,
          type: '0',
          discount: 11,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%ED%95%9C%EC%A7%80%EA%B3%B5%EC%98%88.jpg',
          category: 'craft',
          contents: '한국 전통의 미를 표현하는 한지공예를 기초부터 쉽게 따라 하면서 배울 수 있습니다. 매 수업 시간마다 자신만의 작품을 만들어서 자신의 예술성을 느껴보는 시간을 가져보세요.',
          teacherInfo: '한국미술협회 소속의 작가이자 한지공예 전문가입니다. 20년 이산 작품 활동을 하면서 한국 전통 한지공예를 더 많은 분들에게 알리고자 수업을 진행해 왔습니다. 시니어부터 초중고 학생까지 다양한 연령층의 강의를 진행했습니다.',          
          createdAt,
          updatedAt,
          teacherId: 9,
          region: '',
        },
        {
          name: '라탄으로 손가방 만들기',
          price: 24000,
          type: '0',
          discount: 20,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%9D%BC%ED%83%84.jpg',
          category: 'craft',
          contents: '바쁘게 지나가는 일상 속에 점점 사라져가는 나의 모습. 심호흡 한 번 하고 조용히 휴식을 취하고 싶을 때 온전히 나를 찾기 위한 여행 라탄 클래스입니다. 등나무를 만지며 하나 둘 꿰어가며 생각을 정리해 보는 시간을 가져보세요. 반복된 작업을 하면서 생각을 하나 둘 정리하고 나면 어느새 완성된 작품 속에 정리된 생각들이 담겨져 있을 거예요.',
          teacherInfo: '불광역 근처에서 라탄 공방을 하고 있습니다.',          
          createdAt,
          updatedAt,
          teacherId: 10,
          region: '',
        },
        {
          name: '중장년 창업을 위해 필요한 기초지식', // 50+
          price: 0, // 무료
          type: '0',
          discount: 0,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%B0%BD%EC%97%85.jpg',
          category: 'career',
          contents: '창업환경 이해하기, 창업과정 사업모델 수립을 위해 꼭 필요한 것.',
          teacherInfo: 'OOO 연구 소장',          
          createdAt,
          updatedAt,
          teacherId: 4,
          region: '',
        },
        {
          name: '치매노인 돌봄을 위한 존엄케어의 실천', // 50+
          price: 19800,
          type: '0',
          discount: 30,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%A1%B4%EC%97%84%EC%BC%80%EC%96%B4.jpg',
          category: 'career',
          contents: '치매 예방과 질환을 이해학습. 존엄케어의 정의와 휴머니큐드케어의 학습.',
          teacherInfo: 'OO요양 병원 이사',          
          createdAt,
          updatedAt,
          teacherId: 11,
          region: '',
        },
        {
          name: '개인 브랜딩을 위한 블로그 첫 단계 시작하기', // 50+
          price: 17900,
          type: '0',
          discount: 20,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EA%B0%9C%EC%9D%B8%EB%B8%94%EB%A1%9C%EA%B7%B8.jpg',
          category: 'career',
          contents: '퍼스널 브랜딩을 위한 블로그 개설 및 꾸미기',
          teacherInfo: 'OOO 1인 창업 연구소장',          
          createdAt,
          updatedAt,
          teacherId: 3,
          region: '',
        },
        {
          name: '취업을 위한 퍼스널 이미지스타일링', // 50+
          price: 21000,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%ED%8D%BC%EC%8A%A4%EB%84%90+%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81.jpg',
          category: 'career',
          contents: '새롭게 자신의 이미지를 이해하고 적용하여, 취업이나 이직시 각자에게 필요한 이미지 전략을 스스로 찾고 표현하도록 도와드립니다.',
          teacherInfo: 'OOO 퍼스널 이미지 강사',          
          createdAt,
          updatedAt,
          teacherId: 11,
          region: '',
        },
        {
          name: '바리스타 라떼아트 과정', // 50+
          price: 23000,
          type: '0',
          discount: 8,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%B0%94%EB%A6%AC%EC%8A%A4%ED%83%80+%EB%9D%BC%EB%96%BC%EC%95%84%ED%8A%B8.jpg',
          category: 'career',
          contents: '커피 바리스타 역할을 올바르게 수행하기 위한 기본을 수련. 종강 후 커뮤니티 가입 가능',
          teacherInfo: '바리스타 경력 12년',          
          createdAt,
          updatedAt,
          teacherId: 12,
          region: '',
        },
        // 운동/건강
        {
          name: '활기찬 아침을 위한 아침 명상',
          price: 19800,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%ED%99%9C%EA%B8%B0%EC%B0%AC+%EC%95%84%EC%B9%A8%EC%9D%84+%EC%9C%84%ED%95%9C+%EB%AA%85%EC%83%81.jpg',
          category: 'health',
          contents: '명상 준비과정을 통해 오감이 깨어나는 느낌을 알아차려 보세요. 호흡의 알아차림을 통한 몸과 마음의 긴장과 이완, 변화까지 자각하는 시간을 가져봅니다.',
          teacherInfo: 'OOO 명상 센터 운영',          
          createdAt,
          updatedAt,
          teacherId: 14,
          region: '',
        },
        {
          name: '마음을 가볍게하는 요가 클래스',
          price: 19800,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%A7%88%EC%9D%8C%EC%9D%84+%EA%B0%80%EB%B3%8D%EA%B2%8C%ED%95%98%EB%8A%94+%EC%9A%94%EA%B0%80+%ED%81%B4%EB%9E%98%EC%8A%A4.jpg',
          category: 'health',
          contents: '요가를 통해 오감이 깨어나는 느낌을 알아차려 보세요. 호흡의 알아차림을 통한 몸과 마음의 긴장과 이완, 변화까지 자각하는 시간을 가져봅니다.',
          teacherInfo: 'OOO 요가 센터 운영',          
          createdAt,
          updatedAt,
          teacherId: 13,
          region: '',
        },
        // 음료, 요리
        {
          name: '발렌타인데이 특집 브라우니 만들기',
          price: 5000,
          type: '0',
          discount: 5,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%B0%9C%EB%A0%8C%ED%83%80%EC%9D%B8%EB%8D%B0%EC%9D%B4%ED%8A%B9%EC%A7%91.jpg',
          category: 'food',
          contents: '달콤한 향기가 가득한 발렌타인데이 베이킹클래스를 통해 더욱 달콤하고 행복한 가족관계를 지원합니다.',
          teacherInfo: '푸드 스타일 리스트 경력 3년',          
          createdAt,
          updatedAt,
          teacherId: 15,
          region: '',
        },
        {
          name: '몸 속의 독소를 제거해주는 건강쥬스 만들기',
          price: 23500,
          type: '0',
          discount: 5,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EA%B1%B4%EA%B0%95%EC%A5%AC%EC%8A%A4.jpg',
          category: 'food',
          contents: '몸의 독소를 제거해주는 여러 채소의 효능을 알아보고, 건강쥬스를 만들어 봅니다.',
          teacherInfo: 'OOO 건강 쥬스 가게 운영',          
          createdAt,
          updatedAt,
          teacherId: 14,
          region: '',
        },
        {
          name: '마법반찬 든든한 밥상',
          price: 15900,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%93%A0%EB%93%A0%ED%95%9C+%EB%B0%A5%EC%83%81.jpg',
          category: 'food',
          contents: '집나간 입맛도 다시 돌아오게 하는 든든한 밥상차리기의 비법을 전수합니다.',
          teacherInfo: 'OO 반찬가게 운영.',          
          createdAt,
          updatedAt,
          teacherId: 16,
          region: '',
        },
        {
          name: '집에서 간단히 홈베이킹',
          price: 18300,
          type: '0',
          discount: 12,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%ED%99%88%EB%B2%A0%EC%9D%B4%ED%82%B9.jpg',
          category: 'food',
          contents: '집에서 간단하게 만들어 먹을 수 있는 베이킹 레시피를 소개합니다.',
          teacherInfo: '요리학원 강사',          
          createdAt,
          updatedAt,
          teacherId: 17,
          region: '',
        },
        // 음악
        {
          name: '금요일 마다 색소폰 배우기',
          price: 27000,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%83%89%EC%86%8C%ED%8F%B0.jpg',
          category: 'music',
          contents: '모두모두 한 마음이 되어 색소폰을 배워보아요. 기초부터 중급까지 천천히 즐겁게 색소폰을 배워 보아요.',
          teacherInfo: '색소폰 강사 경력 5년',          
          createdAt,
          updatedAt,
          teacherId: 18,
          region: '',
        },
        {
          name: '짠짜라 노래교실',
          price: 19800,
          type: '0',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%84%B1%EC%95%85%EA%B5%90%EC%8B%A4.jpg',
          category: 'music',
          contents: '짠짠짠 하고 다시 오세요. 즐거움이 가득한 노래 교실입니다.',
          teacherInfo: '노래교실 강사 경력 3년',          
          createdAt,
          updatedAt,
          teacherId: 19,
          region: '',
        },
        // 오프라인-------------
        {
          name: '꽃청 소믈리에',
          price: 20000,
          type: '1',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EA%BD%83%EC%B2%AD+%EC%86%8C%EB%AF%88%EB%A6%AC%EC%97%90.jpg',
          category: 'food',
          contents: '향도 좋고 몸에도 좋은 꽃을 이용해서 청을 담아보는 수업입니다. 마시면 마음도 맑아지고 좋습니다.',
          teacherInfo: '소믈리에 2급 자격증',          
          createdAt,
          updatedAt,
          teacherId:1,
          region: '서울',
        },
        {
          name: '관계를 잇는 질문 대화법',
          price: 0,
          type: '1',
          discount: 0,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EA%B4%80%EA%B3%84%EB%A5%BC+%EC%9E%87%EB%8A%94+%EB%8C%80%ED%99%94%EB%B2%95.jpg',
          category: 'career',
          contents: '네.하고 어떤 말을 어떻게 건널지 모르시겠다고요. 질문을 어떻게 잘하면 상대방에게 배려가 되는지 모르시겠다고요. 이 수업으로 오세요. 질문을 통해서 관계를 잇는 법을 알려드려요.',
          teacherInfo: '커뮤니케이션 학과 졸업',          
          createdAt,
          updatedAt,
          teacherId: 17,
          region: '서울',
        },
        {
          name: '바리스타 2급 자격증 과정',
          price: 15000,
          type: '1',
          discount: 30,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%B0%94%EB%A6%AC%EC%8A%A4%ED%83%80+%EB%9D%BC%EB%96%BC%EC%95%84%ED%8A%B8.jpg',
          category: 'career',
          contents: '커피 바리스타 역할을 올바르게 수행하기 위한 기본을 수련. 종강 후 커뮤니티 가입 가능',
          teacherInfo: '바리스타 경력 13년',          
          createdAt,
          updatedAt,
          teacherId: 3,
          region: '경기도',
        },
        {
          name: '뮤직 테라피-음악과 두뇌 트레이닝',
          price: 24900,
          type: '1',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%AE%A4%EC%A7%80%ED%85%8C%EB%9D%BC%ED%94%BC.jpg',
          category: 'music',
          contents: '댕댕댕  여러가지 악기와 기구를 이용해서 마음을 치료해 보아요. 마음이 한결 가벼워 집니다.',
          teacherInfo: 'OOO 미술 치료 센터 운영',
          createdAt,
          updatedAt,
          teacherId: 4,
          region: '강원도',
        },
        {
          name: '나만의 감성이 담긴 독창적인 사진 찍기',
          price: 16000,
          type: '1',
          discount: 20,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%82%AC%EC%A7%84%EC%B0%8D%EA%B8%B0.jpg',
          category: 'picture',
          contents: '사진 구성에 필요한 디자인 요소 배워 나만의 창조적 사진 촬영하기. 창작으로서의 사진 기법을 이해하고 싶으신 분들 환영입니다.',
          teacherInfo: '사진 작가로 활동 중',          
          createdAt,
          updatedAt,
          teacherId: 1,
          region: '충청도',
        },
        {
          name: '꼼지락 손뜨개',
          price: 28900,
          type: '1',
          discount: 12,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EA%BC%BC%EC%A7%80%EB%9D%BD+%EC%86%90%EB%9C%A8%EA%B0%9C.jpg',
          category: 'craft',
          contents: '여러 가지 모티브와 작음 소품, 가방을 만들어요. 처음 코바늘뜨기를 시작하는 분이나 뜨개를 해왔지만, 기호로 된 도안을 볼 수 없어 막막한 분들께 코바늘뜨기의 기본이 되는 사슬뜨기 기법 등 도안을 보고 스스로 뜨개를 할 수 있도록 알려드려요.',
          teacherInfo: '안녕하세요. 손뜨게 전문공방 순이네 뜨개질 대표입니다. 처음 시작하시는 분이나 기호로 된 도안을 볼 수 없어 막막하시는 분들을 위해 체계적인 수업을 준비했습니다.',          
          createdAt,
          updatedAt,
          teacherId: 2,
          region: '경상도',
        },
        {
          name: '재미있는 명리학 입문',
          price: 21000,
          type: '1',
          discount: 5,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%AA%85%EB%A6%AC%ED%95%992.jpg',
          category: 'career',
          contents: '쉽고 빠르게 명리학을 이해해보아요. 명리학의 기초를 배웁니다.',
          teacherInfo: '사주명리인문학 강사',          
          createdAt,
          updatedAt,
          teacherId: 10,
          region: '전라도',
        },
        {
          name: '놀이돌봄 선생님 양성과정',
          price: 0,
          type: '1',
          discount: 0,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%86%80%EC%9D%B4%EB%8F%8C%EB%B4%84.jpg',
          category: 'career',
          contents: '우리동네 유치원생들의 등하원을 도와주기 위해서 배우는 놀이돌봄 선생님 양성 과정 입니다.',
          teacherInfo: 'OOO 등하원 서비스 교육 강사',          
          createdAt,
          updatedAt,
          teacherId: 20,
          region: '서울',
        },
        {
          name: '쉽고 재미있는 미술작품 보고 느끼기',
          price: 9000,
          type: '1',
          discount: 5,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%89%BD%EA%B3%A0%EC%9E%AC%EB%AF%B8%EC%9E%88%EB%8A%94+%EB%AF%B8%EC%88%A0%EC%9E%91%ED%92%88+%EB%B3%B4%EA%B3%A0+%EB%8A%90%EB%81%BC%EA%B8%B0.jpg',
          category: 'art',
          contents: '흔히 어렵다고 생각하는 현대미술을 쉽게 재미있게 느끼는 방법을 알아가는 수업입니다. 미술관이나 전시회를 함께 방문하여 현장에서 미술 작품을 감상하는 방법도 배워봅니다.',
          teacherInfo: '도슨트 경력 3년',          
          createdAt,
          updatedAt,
          teacherId: 8,
          region: '서울',
        },
        {
          name: '50+를 위한 생활형 재무설계',
          price: 27000,
          type: '1',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%83%9D%ED%99%9C%ED%98%95+%EC%9E%AC%EB%AC%B4%EC%84%A4%EA%B3%84.jpg',
          category: 'career',
          contents: '새로운 인생 2막 설계를 앞둔 50+ 세대를 위해 주식 펀드 보험 연금 부동산 등 다양한 금융상품의 장단점을 비교 분석하고 추천합니다.',
          teacherInfo: 'OOO 연구소 대표',          
          createdAt,
          updatedAt,
          teacherId: 9,
          region: '서울',
        },
        {
          name: '몸과 마을을 바로 잡는 기체조',
          price: 5000,
          type: '1',
          discount: 5,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EA%B8%B0%EC%B2%B4%EC%A1%B0.jpg',
          category: 'health',
          contents: '몸과 마음을 건강하게 단련하는 기체조와 단전호흡 수련법을 익혀봅니다. 일상생활을 하면서 쌓인 스트레스를 호흡과 명상을 통해서 해소하고, 긴장으로 뭉친 몸의 근육까지 체조를 통해 부드럽게 풀어줄 수 있습니다.',
          teacherInfo: '태퀀도 사범 경력 5년',          
          createdAt,
          updatedAt,
          teacherId: 14,
          region: '경기도',
        },
        {
          name: '줄리 하프 배우기',
          price: 26000,
          type: '1',
          discount: 20,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%ED%95%98%ED%94%84%EB%B0%B0%EC%9A%B0%EA%B8%B0.jpg',
          category: 'music',
          contents: '누구나 간단히 다룰 수 있는 줄리하프. 양손의 손가락을 활용해 음악과 맞추어 현을 연주하다보면 완성되는 아름답고 맑은 소리로 행복과 마음의 치유를 얻을 수 있습니다.',
          teacherInfo: '하프 강사',          
          createdAt,
          updatedAt,
          teacherId: 13,
          region: '경기도',
        },
        {
          name: '현이네 가죽놀이',
          price: 23000,
          type: '1',
          discount: 15,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%AD%88%EB%8B%88%EB%84%A4+%EA%B0%80%EC%A3%BD%EB%86%80%EC%9D%B4.jpg',
          category: 'craft',
          contents: '초보자도 쉽게 하고 행복해지는 현이네 가죽공예',
          teacherInfo: 'OO 가죽공방 운영',          
          createdAt,
          updatedAt,
          teacherId: 7,
          region: '경기도',
        },
        {
          name: '실버 교구 놀이',
          price: 0,
          type: '1',
          discount: 0,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%8B%A4%EB%B2%84%EA%B5%90%EA%B5%AC%EB%86%80%EC%9D%B4.jpg',
          category: 'career',
          contents: '시니어 어르신분들을 의한 교구로 놀이하는 법을 가르쳐 드립니다. 집에서 혼자 계시는 분들을 위해 몸을 움직여 재활치료도 되는 교구 놀이입니다.',
          teacherInfo: '요양보호사 2급 자격증',          
          createdAt,
          updatedAt,
          teacherId: 8,
          region: '강원도',
        },
        {
          name: '모던민화-꽃 중의 꽃, 모란을 그리다',
          price: 19800,
          type: '1',
          discount: 23,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EB%AA%A8%EB%8D%98%EB%AF%BC%ED%99%94.jpg',
          category: 'art',
          contents: '예쁜 우리 그림 민화 초급. 모란을 그리다.',
          teacherInfo: '한국화 전공, 아동미술지도자 자격증',          
          createdAt,
          updatedAt,
          teacherId: 5,
          region: '충청도',
        },
        {
          name: '홈 바리스타-집에서 커피 브루잉',
          price: 15000,
          type: '1',
          discount: 10,
          img_url: 'https://senior-class.s3.ap-northeast-2.amazonaws.com/class/%EC%BB%A4%ED%94%BC%EB%B8%8C%EB%A3%A8%EC%9E%89.jpg',
          category: 'food',
          contents: '집에서 커피를 브루잉하는 법을 배웁니다. 모든 원두에는 각각의 향이 존재합니다. 향이 잘 나도록 커피를 브루잉하는 법을 배웁니다.',
          teacherInfo: '커피 조리사 1급',          
          createdAt,
          updatedAt,
          teacherId: 20,
          region: '경상도',
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Classes', null, {});
  }
};
