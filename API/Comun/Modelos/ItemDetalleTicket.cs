using System.ComponentModel.DataAnnotations.Schema;

namespace API.Comun;

public class ItemDetalleTicket
{
    public int idTicket { get; set; }
    public int idProd { get; set; }
    public int Cant { get; set; }
    [Column(TypeName="money")]
    public decimal Pmv { get; set; }
    [Column(TypeName="money")]
    public decimal Imp { get; set; }
    public int Desc { get; set; }
}