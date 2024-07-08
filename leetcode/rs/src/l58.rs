pub fn length_of_last_word(s: String) -> i32 {
    let mut len = 0;
    for &c in s.as_bytes().iter().rev() {
        if c != b' ' {
            len += 1;
        } else if len != 0 {
            break;
        }
    }
    len
}
