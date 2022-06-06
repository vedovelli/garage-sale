import type { ActionFunction } from "@remix-run/node";
import { makeDomainFunction } from "remix-domains";
import { formAction } from "remix-forms";
import { z } from "zod";
import { Form } from "remix-forms";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1).email(),
});

const mutation = makeDomainFunction(schema)(async (values) =>
  console.log(values)
);

export const action: ActionFunction = async ({ request }) =>
  formAction({
    request,
    schema,
    mutation,
    successPath: "/",
  });

export default () => <Form schema={schema} />;
