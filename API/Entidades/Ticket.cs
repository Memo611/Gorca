/*
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Ticket
{
    [Key]
    public int ID_Ticket { get; set; }
    public JSType.Date Fecha_Emision_Tic { get; set; }
    public TimeOnly Hora_Emision_Tic { get; set; }
    [Column(TypeName="money")]
    public decimal Subtotal_Tic { get; set; }
    public decimal IVA_Tic { get; set; }
    [Column(TypeName="money")]
    public decimal Total_Tic { get; set; }
    
    public bool Habilitado { get; set; }
    
    //LLAVES FORANEAS
    public int ID_Emp { get; set; }
    public int ID_Gorca { get; set; }
    public virtual Empleado Empleado { get; set; }
    public virtual gorca Gorca { get; set; }
}
*/