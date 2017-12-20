<?php
echo "asda";
function fetch_highest_res($videoid) {
    $image_qualities = array('mqdefault');
//in the order of preference

    foreach ($image_qualities as $image_quality) {
        if (@getimagesize(('http://i.ytimg.com/vi/' . $videoid . '/' . $image_quality . '.jpg'))) {
            $imgurl = "http://i.ytimg.com/vi/$videoid/$image_quality.jpg";
            return $imgurl;
            break; //exiting
        }
    }
}

function truncate($str, $len) {
    $tail = max(0, $len - 10);
    $trunk = substr($str, 0, $tail);

    $trunk .= strrev(preg_replace('~^..+?[\s,:]\b|^...~', '...', strrev(substr($str, $tail, $len - $tail))));
    if (strlen($str) > $len + 1) {
        return $trunk . "<br/><span class='readmore'>......<span class='readmore'>read more</span></span>";
    } else {
        return $trunk;
    }
}

?>