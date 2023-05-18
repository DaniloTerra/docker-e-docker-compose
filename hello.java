public class hello {
    public static void main(String[] args) {
        try {
            while (true) {
                Thread.sleep(1000);
                System.out.println("Hello World! (Java)");
            }
        } catch (InterruptedException error) {
            System.out.println(error.getMessage());
        }
    }
}