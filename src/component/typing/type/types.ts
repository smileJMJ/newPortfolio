interface IOption {
    eleRef: HTMLDivElement | null;
    letter: string[];
    letterTime: number;												// 문자열 각각 모션 속도
    letterDelay: number;											// 문자열 모션 delay
    startDelay: number;												// 문자열 시작 모션 delay
    eraseDelay: number;														// 지워질 때 delay
    cursorEnd: boolean;									// 커서 표시 여부
    infinite: boolean;									// 무한 반복
    slice?: boolean;										// slice 사용 여부
    sliceLetter?: string;									// slice할 텍스트는 #로 표시
    sliceInsertLetter?: string[];						// slice 된 영역에 추가될 텍스트
}