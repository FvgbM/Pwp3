package backend;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class LivroEntity {
    private int codigo;
    private String titulo;
    private String autor;
    private String descritivo;
    private Date ano;
    private int paginas;


    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getDescritivo() {
        return descritivo;
    }

    public void setDescritivo(String descritivo) {
        this.descritivo = descritivo;
    }

    public Date getAno() {
        return ano;
    }

    public void setAno(Date ano) {
        this.ano = ano;
    }

    public int getPaginas() {
        return paginas;
    }

    public void setPaginas(int paginas) {
        this.paginas = paginas;
    }
}
