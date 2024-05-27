
using System.ComponentModel.DataAnnotations;

namespace API.Entidades;

public class gorca
{
    [Key]
    public int ID_Gorca { get; set; }
    public string RFC_G { get; set; }
    public string Razon_Social_G  {get; set; }
    public string Regimen_Fiscal_G { get; set; }
    public string Nombre_Comercial_G { get; set; }
    public string Calle_G { get; set; }
    public int Numero_G { get; set; }
    public string Colonia_G { get; set; }
    public string Ciudad_G { get; set; }
    public string CP_G { get; set; }
    public string Pais_G { get; set; }
    
    public bool Habilitado { get; set; }
}
