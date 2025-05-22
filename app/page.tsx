export default function Home() {
  return (
    <main>
      <section>
        <h2>Tipografia</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Parágrafo simples com algum texto de exemplo.</p>
        <p>
          Outro parágrafo com um <strong>texto em negrito</strong>,{' '}
          <em>itálico</em>, <u>sublinhado</u> e até um <a href="#">link</a>.
        </p>
        <blockquote>
          Isso é uma citação. "Ser ou não ser, eis a questão."
        </blockquote>
        <small>Texto pequeno, geralmente usado para legendas.</small>
      </section>

      <section>
        <h2>Listas</h2>
        <h3>Lista não ordenada</h3>
        <ul>
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>

        <h3>Lista ordenada</h3>
        <ol>
          <li>Primeiro</li>
          <li>Segundo</li>
          <li>Terceiro</li>
        </ol>

        <h3>Lista de descrição</h3>
        <dl>
          <dt>HTML</dt>
          <dd>Linguagem de marcação.</dd>
          <dt>CSS</dt>
          <dd>Folhas de estilo.</dd>
          <dt>JavaScript</dt>
          <dd>Linguagem de programação.</dd>
        </dl>
      </section>

      <section>
        <h2>Formulários</h2>
        <form>
          <div>
            <label>Texto</label>
            <input type="text" placeholder="Digite aqui" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="email@exemplo.com" />
          </div>

          <div>
            <label>Senha</label>
            <input type="password" placeholder="********" />
          </div>

          <div>
            <label>Seleção</label>
            <select>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
          </div>

          <div>
            <label>Textarea</label>
            <textarea placeholder="Digite sua mensagem"></textarea>
          </div>

          <div>
            <label>
              <input type="checkbox" /> Aceito os termos
            </label>
          </div>

          <div>
            <label>
              <input type="radio" name="radio" /> Opção 1
            </label>
            <label>
              <input type="radio" name="radio" /> Opção 2
            </label>
          </div>

          <div>
            <button type="submit">Enviar</button>
            <button type="reset">Resetar</button>
            <button type="button">Apenas Botão</button>
          </div>
        </form>
      </section>

      <section>
        <h2>Tabelas</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Profissão</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ana</td>
              <td>28</td>
              <td>Designer</td>
            </tr>
            <tr>
              <td>Bruno</td>
              <td>34</td>
              <td>Desenvolvedor</td>
            </tr>
            <tr>
              <td>Carla</td>
              <td>25</td>
              <td>Marketing</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Imagens</h2>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      </section>

      <section>
        <h2>Código</h2>
        <p>
          Aqui vai um código embutido: <code>console.log('Hello World')</code>
        </p>
        <pre>
{`function ola() {
  console.log('Olá mundo')
}`}
        </pre>
      </section>

      <section>
        <h2>Outros Elementos</h2>
        <details>
          <summary>Mais informações</summary>
          <p>Esse texto aparece ao abrir o details.</p>
        </details>

        <p>Barra de progresso:</p>
        <progress value="70" max="100">70%</progress>

        <p>Medidor:</p>
        <meter value="0.6">60%</meter>

        <hr />
      </section>
    </main>
  )
}
