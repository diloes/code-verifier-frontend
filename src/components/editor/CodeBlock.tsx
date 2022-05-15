import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import './styles/codeBlock.scss'


interface CodeBlockProps {
  node: {
    attrs: {
      language: string
    }
  },
  updateAttributes: any,
  extension: any
}

export const CodeBlock = ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }: CodeBlockProps) => (
  <NodeViewWrapper className="code-block">
    <select contentEditable={false} defaultValue={defaultLanguage} onChange={event => updateAttributes({ language: event.target.value })}>
      <option value="null">
        auto
      </option>
      <option disabled>
        —
      </option>
      {extension.options.lowlight.listLanguages().map((lang: string, index: number) => (
        <option key={index} value={lang}>
          {lang}
        </option>
      ))}
    </select>
    <pre>
      <NodeViewContent as="code" />
    </pre>
  </NodeViewWrapper>
)