using System.Data.SqlTypes;

namespace API.Controllers.Entidades;

public class Detalle_ticket
{
    public int Cantidad { get; set; }
    public SqlMoney PMV { get; set; }
    public SqlMoney Importe { get; set; }
    public int Descuento { get; set; }
}