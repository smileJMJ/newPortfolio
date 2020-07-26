import {TweenMax} from 'gsap/all';

class Motion {
    private _option: IOption;

    constructor(opt: IOption) {
        this._option = opt;
    }

    // 모션 컨트롤
    typingMotionControl() {
        const slice = this._option.get('slice');

        if(slice){							// 슬라이스 추가되었을 때
            this.typingSliceMotion();
        }else{
            this.typingEraseMotion();
        }
    }

    // 문자 여러개일 때 타이핑 입력 모션
    typingEraseMotion() {
        var $this = this,
            $ele = $this.eleRef,
            $targetTypingArea,
            $letter,
            $cursor;
        var count = $this.resultArr.length,
            curCnt = 0,
            letterLength = 0;				// $targetTypingArea의 .letter length
        i = 0;

        motion();

        function motion(){
            var letterH = 0;

            $targetTypingArea = $ele.find(".typing_area").eq(curCnt);
            $cursor = $targetTypingArea.find(">span.cursor");
            $letter = $targetTypingArea.find(">span.letter");
            letterLength = $this.resultArr[curCnt].length;

            TweenMax.set($ele.find(".typing_area"), {display:"none"});
            TweenMax.set($targetTypingArea, {display:"block"});

            if($this.cursorEnd){			// 커서 깜빡거림 모션
                TweenMax.set($cursor, {height:$letter.height(), opacity:0});
                TweenMax.to($cursor, 0.3, {opacity:1, repeat:-1, repeatDelay:0.3, yoyo:true, ease:"Quint.easeInOut"});
            }

            for(var i=0; i<letterLength; i++){
                if($letter.eq(i).height() === 0){
                    TweenMax.set($letter.eq(i), {height:letterH});
                }else{
                    letterH = $letter.eq(i).height();
                }

                TweenMax.to($letter.eq(i), $this.letterTime, {opacity:1, ease:"Quint.easeInOut", delay:$this.letterDelay*i, onComplete:function(){				// letter 정방향 모션
                        if($(this.target).index() === letterLength-1) {
                            if(curCnt >= count-1 && $this.infinite === false) return;
                            setTimeout(function(){
                                for(var j=letterLength-1; j>=0; j--){				// letter 역방향 모션
                                    if($this.cursorEnd){
                                        TweenMax.set($cursor, {"left":$letter.eq(j).position().left, "top": $letter.eq(j).position().top, delay:$this.letterDelay*(letterLength-1-j)});
                                    }
                                    TweenMax.to($letter.eq(j), $this.letterTime, {opacity:0, ease:"Bounce.easeInOut", delay:$this.letterDelay*(letterLength-1-j)-0.02, onComplete:function(){
                                            if($(this.target).index() === 0){
                                                if(curCnt >= count-1){
                                                    if($this.infinite){
                                                        curCnt = 0;
                                                    }else{
                                                        return;
                                                    }
                                                }else{
                                                    curCnt++;
                                                }
                                                setTimeout(function(){
                                                    motion(curCnt);
                                                }, $this.startDelay*1000);
                                            }
                                        }});
                                }
                            }, $this.eraseDelay*1000);
                        }
                    }});
                if($this.cursorEnd){
                    TweenMax.set($cursor, {"left":$letter.eq(i).position().left + $letter.eq(i).width(), "top":$letter.eq(i).position().top, delay:$this.letterDelay*i});
                }
            }
        }
    }

    typingSliceMotion() {

    }


}

export default Motion;