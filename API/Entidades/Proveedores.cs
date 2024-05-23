
using System.ComponentModel.DataAnnotations;

namespace API.Entidades;

public class Proveedores
{
    [Key]
    public int ID_Prov { get; set; }
    public string Razon_Social_Prov { get; set; }
    public string RFC_Prov { get; set; }
    public string Regimen_Fiscal_Prov { get; set; }
    public string Nombre_Comercial_Prov { get; set; }
    public string Calle_Prov { get; set; }
    public int Numero_Prov { get; set; }
    public string Colonia_Prov { get; set; }
    public string Ciudad_Prov { get; set; }
    public string CP_Prov { get; set; }
    public string Pais_Prov { get; set; }
    
    public bool Habilitado { get; set; }
}
