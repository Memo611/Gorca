using System.ComponentModel.DataAnnotations.Schema;

namespace API.Comun;

public class ItemDetalleFactura
{
    public int idProd { get; set; }
    public int Fol { get; set; }
    public int Cant { get; set; }
    [Column(TypeName="money")]
    public decimal Pmv { get; set; }
    [Column(TypeName="money")]
    public decimal Imp { get; set; }
    public int Desc { get; set; }
}