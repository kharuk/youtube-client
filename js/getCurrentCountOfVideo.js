const BIG_SCREEN_MIN_WIDTH = 1200;
const MEDIUM_SCREEN_MIN_WIDTH = 720;
const SMALL_SCREEN_MAX_WIDTH = 560;

export default function getCurrentVideoCount(){
    if(window.screen.availWidth <= SMALL_SCREEN_MAX_WIDTH)
        return 1;
    else
    if(window.screen.availWidth > SMALL_SCREEN_MAX_WIDTH)
        if(window.screen.availWidth >= MEDIUM_SCREEN_MIN_WIDTH)
            if(window.screen.availWidth >= BIG_SCREEN_MIN_WIDTH)
                return 4;
            else
                return 3;
        else
            return 2;
}