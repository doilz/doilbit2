const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,  // 몽고디비에서 사용하는 객체 아이디 타입
        ref: 'User',                           // 참조할 모델 이름
        required: true                         // 필수 입력
    },
    quantity: {                                // 입금할 금액
        type: Number,                          // 숫자타입
        required: true                         // 필수 입력
    },
    createdAt: {                                // 생성일자
        type: Date,                             // 날짜 타입
        default: Date.now                       // 현재 시간으로 설정
    }
});

const Bank = mongoose.model('Bank', bankSchema);
module.exports = Bank;
