use std::{char, collections::HashMap, i32};

pub fn roman_to_int(s: String) -> i32 {
    let mut map: HashMap<char, i32> = HashMap::new();
    map.insert('I', 1);
    map.insert('V', 5);
    map.insert('X', 10);
    map.insert('L', 50);
    map.insert('C', 100);
    map.insert('D', 500);
    map.insert('M', 1000);

    let mut out: i32 = 0;
    let c = s.chars().collect::<Vec<char>>();

    let mut i = 0;
    while i < s.len() {
        let current = map[&c[i]];
        let mut next: i32 = 0;

        if i < s.len() - 1 {
            next = map[&c[i + 1]];
        }

        if current < next {
            out += next - current;
            i += 1;
        } else {
            out += current;
        }
        i += 1;
    }

    out
}
