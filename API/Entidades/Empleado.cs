
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Runtime.InteropServices.JavaScript;

namespace API.Entidades;

public class Empleado
{
    [Key]
    public int ID_Emp { get; set; }
    public string RFC_Emp  { get; set; }
    public string CURP_Emp { get; set; }
    public string Nombre_Pila { get; set; }
    public string Apellido_P { get; set; }
    public string Apellido_M { get; set; }
    public DateTime Fecha_nac { get; set; }
    public int NSS { get; set; }
    public string Puesto { get; set; }
    [Column(TypeName="money")]
    public decimal Salario { get; set; }
    public DateTime Fecha_contrato { get; set; }
    
    public bool Habilitado { get; set; }
}
