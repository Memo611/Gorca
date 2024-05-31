namespace API.Entidades
{
    public class Pedido
    {
        public int ID { get; set; }
        public int FacturaID { get; set; }
        public DateTime Fecha { get; set; }
        public List<Producto> Productos { get; set; }
        public decimal Total { get; set; }
    }
}
