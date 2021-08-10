async function postWelcome(context) {
  console.log("**********************" + context.payload.issue.title);
    const applicantWelcome = await context.github.repos.getContents(
      context.repo({ path: ".github/applicant-welcome.md" })
    );

    const applicantMessage = Buffer.from(
      applicantWelcome.data.content,
      "base64"
    ).toString();

    context.github.issues.createComment(
      context.issue({ body: applicantMessage })
    );
}

module.exports = postWelcome;
