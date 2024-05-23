/*
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;

namespace API.Entidades;

public class Det_Tick
{
    public int Cantidad_Tic { get; set; }
    [Column(TypeName="money")]
    public decimal PMV_Tic { get; set; }
    [Column(TypeName="money")]
    public decimal Importe_Tic { get; set; }
    public decimal Descuento_Tic { get; set; }
    
    public bool Habilitado { get; set; }
    
    //LLAVES FORANEAS
    public int ID_Prod { get; set; }
    public int ID_Ticket { get; set; }
    public ICollection<Ticket> Ticket { get; set; }
    public ICollection<Producto> Producto { get; set; }
}
*/