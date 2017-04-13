/**
 * Created by ljwwolfat on 4/13/17.
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var le = s.length,
        map = {},
        result = 0,
        i;

    if (le === 0) {
        return 0;
    }

    map['I'] = 1;
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;
    map={"I":1};

    for (i = 0; i < le; i++) {
        result += map[s.charAt(i)];

        if (i > 0 && map[s.charAt(i)] > map[s.charAt(i - 1)]) {
            result -= 2 * map[s.charAt(i - 1)];
        }
    }

    return result;
};
