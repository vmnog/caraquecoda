import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

const CalendlyLink = "https://calendly.com/mentoriavictornogueira/inscricao-mentoria-caraquecoda-reuniao-invidual";

export const JoinMentorshipEmail = ({ email }: { email: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Você Está na Lista de Espera da Mentoria do @caraquecoda!</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Você Está na Lista de Espera da Mentoria do @caraquecoda!
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Olá, você se inscreveu com o e-mail {email}
                </Text>

                <Text className="text-base">
                  Obrigado por se inscrever na mentoria de programação do @caraquecoda! Estamos muito felizes em ver seu interesse em transformar sua carreira com a gente.
                </Text>

                <Text className="text-base">
                  Você foi adicionado(a) à nossa lista de espera e, para garantir que a mentoria seja perfeita para você, gostaria de convidá-lo(a) para uma call rápida comigo.
                </Text>

                <Text className="text-base">
                  Durante essa conversa, vou tirar todas as suas dúvidas sobre a mentoria, traçar um planejamento personalizado e ver se nosso programa atende às suas expectativas.
                </Text>

                <Text className="text-base">
                  Por favor, agende um horário que seja conveniente para você através do link abaixo:
                </Text>

                <Section className="text-center">
                  <Button className="bg-brand text-white rounded-lg py-3 px-[18px]" href={CalendlyLink}>
                    Agendar Call
                  </Button>
                </Section>

                <Text className="text-base">
                  Estou ansioso para conhecê-lo(a) e ajudar você a dar o próximo passo na sua jornada de aprendizado.
                </Text>

                <Text className="text-base">
                  Até breve!
                </Text>

                <Text className="text-base">
                  Abraços,<br />
                  Victor Nogueira<br />
                  @caraquecoda
                </Text>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default JoinMentorshipEmail;
