 
        var firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
        var firebaseDatabase; //파이어베이스 db 모듈 전역변수
        var name; //유저 이름
        var loginUserKey; //로그인한 유저의 부모 key
        var userInfo; //로그인한 유저의 정보 object type

        //파이어 베이스 초기화 코드
        var config = {
            apiKey: "AIzaSyB8r-4Je7eGofLDKDiTpEppdAp9cItLLug",
            authDomain: "webnote-59e75.firebaseapp.com",
            databaseURL: "https://webnote-59e75.firebaseio.com",
            projectId: "webnote-59e75",
            storageBucket: "webnote-59e75.appspot.com",
            messagingSenderId: "1076614864624",
            appId: "1:1076614864624:web:d1d61eb0ff82cb2aba2c35",
            measurementId: "G-7DW85B53L3"
        };
        //파이어베이스 초기화
        firebase.initializeApp(config);
        //인증모듈 객체 가져오기
        firebaseEmailAuth = firebase.auth();
        //데이터베이스 모듈객체 가져오기
        firebaseDatabase = firebase.database();

        //세션 체크 함수
        userSessionCheck();


 
