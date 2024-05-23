using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.InteropServices.JavaScript;

namespace API.Comun;

public class ItemTicket
{
    public int idTicket { get; set; }
    public JSType.Date FecEmision { get; set; }
    public TimeOnly HoraEmi { get; set; }
    [Column(TypeName="money")]
    public decimal Subt { get; set; }
    public decimal IVA { get; set; }
    [Column(TypeName="money")]
    public decimal Tot { get; set; }
}