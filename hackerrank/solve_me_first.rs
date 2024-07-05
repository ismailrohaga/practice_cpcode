use std::io;

fn main() {
    let mut in0 = String::new();
    let mut in1 = String::new();

    io::stdin().read_line(&mut in0).ok().expect("parse error");
    io::stdin().read_line(&mut in1).ok().expect("parse error");

    let mut a: i32 = in0.trim().parse().ok().expect("parse error");
    let mut b: i32 = in1.trim().parse().ok().expect("parse error");

    println!("{}", a + b)
}
