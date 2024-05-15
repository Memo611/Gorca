using System.Data.SqlTypes;

namespace API.Controllers.Entidades;

public class Ticket_venta
{
    public int ID_ticket { get; set; }
    public DateTime Fecha_emision { get; set; }
    public SqlMoney Subtotal { get; set; }
    public int IVA { get; set; }
    public SqlMoney Total { get; set; }
}