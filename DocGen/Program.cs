public class Program
{
    public static void Main(string[] args)
    {
        Helper helper = new Helper();
        try
        {
            helper.Run().Wait();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
        }
    }
}
