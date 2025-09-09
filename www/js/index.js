// Cordova 앱 초기화
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // 디바이스가 준비되었을 때 실행
    console.log('Device is ready');
    
    // UI 상태 변경
    document.querySelector('.listening').style.display = 'none';
    document.querySelector('.received').style.display = 'block';
    
    // 여기에 러닝 앱 기능들을 추가할 수 있습니다
    initializeRunningApp();
}

// 러닝 앱 초기화 함수
function initializeRunningApp() {
    console.log('Running app initialized');
    
    // GPS 위치 추적 시작
    startLocationTracking();
    
    // UI 이벤트 리스너 등록
    setupEventListeners();
}

// GPS 위치 추적
function startLocationTracking() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                console.log('현재 위치:', position.coords.latitude, position.coords.longitude);
                // 위치 정보 처리
            },
            function(error) {
                console.log('위치 정보 오류:', error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    }
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 앱 일시정지/재개 이벤트
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);
}

function onPause() {
    console.log('앱이 일시정지됨');
}

function onResume() {
    console.log('앱이 재개됨');
}
