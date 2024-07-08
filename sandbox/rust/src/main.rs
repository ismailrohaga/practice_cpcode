fn main() {
    println!("result is: {}", is_palindrome(-121));
}

fn is_palindrome(x: i32) -> bool {
    let binding = x.to_string();
    let test = &binding.split(' ').collect();
    println!("test: {}", test);
    true
}
