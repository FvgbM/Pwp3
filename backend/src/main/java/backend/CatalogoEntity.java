package backend;

import org.springframework.stereotype.Component;

@Component
public class CatalogoEntity {
    private int codigo;
    private String titulo;
    private LeitorEntity leitor;

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

    public LeitorEntity getLeitor() {
        return leitor;
    }

    public void setLeitor(LeitorEntity leitor) {
        this.leitor = leitor;
    }
}